/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slugify = require("slugify");
const fs = require("fs");
const { minify } = require("html-minifier-terser");
require("isomorphic-fetch");

exports.onPostBuild = async ({ actions }) => {
  await writePolicyManifest(
    "./public/agreements-manifest.json",
    "api/policy-content?populate=*"
  );
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //create press release templates
  await createCustomPages(
    createPage,
    "./src/templates/press-release-page/press-release-template.js",
    "api/press-releases",
    "press-release"
  );

  //create blog templates
  await createCustomPages(
    createPage,
    "./src/templates/blog-page/blog-template.js",
    "api/blogs",
    "blog"
  );

  //create release note templates
  await createCustomPages(
    createPage,
    "./src/templates/release-note-page/release-note-template.js",
    "api/release-notes",
    "release-note"
  );
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const locale = [
    {
      type: "en",
      url: "",
    },
    // {
    //   type: "zh-Hant-TW",
    //   url: "tw",
    // },
    // {
    //   type: "zh-Hans-CN",
    //   url: "cn",
    // },
  ];

  deletePage(page);

  locale.forEach(({ type, url }) => {
    createPage({
      ...page,
      path: `${page.path}${url}`,
      context: {
        ...page.context,
        locale: type,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "build-javascript") {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

async function writePolicyManifest(fileUrl, targetUrl) {
  const response = await fetch(`${process.env.GATSBY_STRAPI_URL}/${targetUrl}`);
  if (response.status >= 400) {
    console.log(response);
    throw new Error("Bad response from server");
  }

  const datas = await response.json();
  const manifest = {
    agreements: await Promise.all(
      datas.data.attributes?.Manifest_List.map(
        async ({ service, name, content, last_modified }) => {
          var returnContent = "";
          if (content) {
            returnContent = await minify(content, {
              collapseWhitespace: true,
              preventAttributesEscaping: true,
            });
            console.log(returnContent);
          }

          return {
            service: service,
            name: name,
            version: Number(last_modified.replaceAll("-", "")),
            content: returnContent,
            last_modified: last_modified,
          };
        }
      )
    ),
  };

  const json = JSON.stringify(manifest, null, 2);
  try {
    fs.writeFileSync(fileUrl, json, "utf8");
    console.log("Agreement manifest generator completed");
  } catch (err) {
    console.log(err.message);
    new Error("Writing Sync file failed");
  }
}

async function createCustomPages(createPage, fileUrl, targetUrl, pathUrl) {
  const template = path.resolve(fileUrl);
  var page = 1;
  var pageSum = 1;
  do {
    const response = await fetch(
      `${process.env.GATSBY_STRAPI_URL}/${targetUrl}?pagination[page]=${page}`
    );
    if (response.status >= 400) {
      console.log(response);
      throw new Error("Bad response from server");
    }
    const datas = await response.json();
    const meta = datas.meta;
    page += 1;
    pageSum = meta.pagination.pageCount;
    await datas.data.forEach(({ attributes }) => {
      createPage({
        path: `${pathUrl}/${slugify(attributes.Url)}`,
        component: template,
        context: {
          ...attributes,
        },
      });
    });
  } while (page <= pageSum);
}

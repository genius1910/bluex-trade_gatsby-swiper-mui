import React from "react";
import { graphql } from "gatsby";

import BlogList from "../templates/blog-page/blog-list";
import Layout from "../templates/layout";
import Seo from "../templates/seo";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const BlogListPage = ({ data, location }) => {
  const { allStrapiBlogContent, allStrapiLayoutContent } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];

  const contents = allStrapiBlogContent.nodes[0];

  return (
    <Layout type={LayoutType.WHITE} contents={layout} location={location}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.Section_1_Bg?.localFile?.publicURL}
      />
      <BlogList contents={contents} />
    </Layout>
  );
};

export default BlogListPage;

export const query = graphql`
  query {
    allStrapiLayoutContent {
      nodes {
        locale
        Product_Dropdown_Label
        Product_Dropdown_Groups {
          name
          type
          links {
            label
            url
            type
          }
        }
        Header_SubMenus {
          title
          attachment
          links {
            label
            url
            type
          }
        }
        Header_SignIn_Btn {
          text
          link
        }
        Header_Back_Btn
        Site_Map {
          title
          links {
            label
            url
            type
          }
        }
        Footer_Form_Title
        Footer_Form_Button
        Footer_Input_First_Name_Label
        Footer_Input_Last_Name_Label
        Footer_Input_Email_Label
        Footer_Input_Company_Label
        Footer {
          label
          url
          type
        }
        Footer_Form_End_Content
        Footer_Form_End_Button
        Right_Company
        Right_Reserved
      }
    }
    allStrapiBlogContent {
      nodes {
        SEO {
          title
          description
          image {
            localFile {
              publicURL
            }
          }
        }
        Section_1_Paragraph {
          title
          content
        }
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_2_Button
        Category_Type_List {
          text
          link
        }
        Blog_Type_List {
          text
          link
        }
        Not_Found_Paragraph {
          title
          content
        }
      }
    }
  }
`;

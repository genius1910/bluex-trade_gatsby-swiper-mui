import React, { useRef } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";
import { Button, Box } from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import { DateFormator } from "../../utils/date-formator";
import Layout from "../layout";
import Seo from "../seo";
import { LayoutType } from "../../constants/page/layout";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

import IconFB from "../../images/icon/icon-fb-2.inline.svg";
import IconTwitter from "../../images/icon/icon-twitter-2.inline.svg";
import IconLinkedin from "../../images/icon/icon-linkedin-2.inline.svg";
import IconArticle from "../../images/icon/icon-article.inline.svg";

const BlogTemplateFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const BlogTemplatWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  min-height: 30rem;
  height: fit-content;
  box-sizing: border-box;
  padding-top: 5.875rem;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;

  img {
    width: 100%;
    min-height: 30rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    margin: 0rem -1.25rem 2.375rem;

    img {
      min-height: auto;
    }
  }
`;

const ArticleSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.313rem;
  margin-bottom: 1.313rem;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const ArticleInfo = styled.div`
  ${DefaultFont}
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: bold;
  text-transform: uppercase;

  > div {
    color: ${Colors.GRAY5};

    & + div {
      margin-top: 0.25rem;
    }
    &:first-child {
      > span {
        & + span {
          margin-left: 1.25rem;
        }
        &:first-child {
          color: ${Colors.SECONDARY};
        }
        &:nth-child(2) {
          color: ${Colors.BLUE_GREEN2};
        }
        &:nth-child(3) {
          color: ${Colors.ORANGE2};
        }
      }
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    margin-bottom: 0.75rem;
  }
`;

const SocialMediaIconList = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;

  > button {
    height: 1.5rem;

    & + button {
      margin-left: 0.688rem;
    }
  }
`;

const ArticleContentWrapper = styled.div`
  display: flex;
  margin-bottom: 3.125rem;
  ${DefaultFont}
`;

const ArticleSideBarWrapper = styled.div`
  margin-right: 1.25rem;
`;

const SideBarTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.25rem;
  padding-left: 0.625rem;
  box-sizing: border-box;
  background-color: ${Colors.BG_BLUE_LIGHT2};
  line-height: 1.5rem;
  font-size: 0.875rem;
  color: ${Colors.PRIMARY};
  font-weight: bold;
`;

const SideBarSubTitleWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  ol {
    list-style: none;
    padding-left: 0rem;

    li {
      display: flex;

      span {
        padding-top: 0.125rem;
        margin-right: 0.5rem;
      }
      & + li {
        margin-top: 0.5rem;
      }
    }
  }
  button {
    align-items: flex-start;
    padding: 0rem;
    text-align: left;
    color: ${Colors.GRAY6};
    text-transform: none;

    & + button {
      margin-top: 1.25rem;
    }
  }
`;

const SideBarRecentsWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  > div {
    display: inline-flex;
    align-items: center;
    width: 100%;

    & + div {
      margin-top: 1.25rem;
    }
    > svg:first-child {
      flex: 0 0 1.875rem;
      margin-right: 0.625rem;
    }
    > a {
      line-height: 1.375rem;
      font-size: 0.875rem;
      color: ${Colors.GRAY6};
    }
  }
`;

const ArticleParagraphList = styled.div`
  flex: 1 1 auto;
  color: ${Colors.PRIMARY};

  p {
    line-height: 1.5rem;
  }
  > div {
    margin-bottom: 3.125rem;
  }
  ul,
  ol {
    padding-left: 1.5rem;

    li {
      line-height: 1.5rem;
    }
  }
  img {
    max-width: 100%;
  }
`;

const ArticleFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 6.25rem;
`;

const BlogTemplate = ({ data, pageContext, location }) => {
  const { allStrapiLayoutContent, allStrapiBlogContent, allStrapiBlog } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiBlogContent.nodes[0];
  const blogList = allStrapiBlog.nodes;
  const blog = blogList.find(node => node.Url === pageContext.Url);
  const { SEO, Title, Category, Type, Author, UpdateDate, Image, ContentList } =
    blog;
  const refs = useRef([]);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      // console.log(blog);
    }
  }, [blog]);

  const socialMediaList = () => (
    <SocialMediaIconList>
      <FacebookShareButton url={location.href}>
        <IconFB />
      </FacebookShareButton>
      <TwitterShareButton url={location.href} title={Title}>
        <IconTwitter />
      </TwitterShareButton>
      <LinkedinShareButton url={location.href} title={Title}>
        <IconLinkedin />
      </LinkedinShareButton>
    </SocialMediaIconList>
  );

  return (
    <Layout type={LayoutType.PRIMARY} contents={layout}>
      <Seo
        title={SEO?.title ? SEO.title : Title}
        description={SEO?.description ? SEO.description : ""}
        image={
          SEO.image
            ? SEO.image?.localFile?.publicURL
            : Image?.localFile?.publicURL
        }
        url={location.href}
      />
      <BlogTemplateFrame>
        <BlogTemplatWrapper>
          <ImageWrapper>
            <img src={Image?.localFile?.publicURL} alt="" />
          </ImageWrapper>
          <CustomTitle
            textAlign="left"
            lineHeight="3.375rem"
            fontSize="2.25rem"
            color={Colors.PRIMARY}
            whiteSpace="pre-wrap"
          >
            {Title}
          </CustomTitle>
          <ArticleSub>
            <ArticleInfo>
              <div>
                <span>{Author}</span>
                {Type ? (
                  <span>
                    {
                      contents.Blog_Type_List.find(type => type.link === Type)
                        ?.text
                    }
                  </span>
                ) : null}
                {Category ? (
                  <span>
                    {
                      contents.Category_Type_List.find(
                        category => category.link === Category
                      )?.text
                    }
                  </span>
                ) : null}
              </div>
              <div>{`Created on ${DateFormator(pageContext.Date)}`}</div>
              <div>{`Updated on ${DateFormator(UpdateDate)}`}</div>
            </ArticleInfo>
            {socialMediaList()}
          </ArticleSub>
          <ArticleContentWrapper>
            <Box
              sx={{ display: { xs: "none", sm: "block" } }}
              flex="0 0 13.75rem"
            >
              <ArticleSideBarWrapper>
                <SideBarTitle>
                  {contents.Template_Sidebar_Section_1_Title}
                </SideBarTitle>
                <SideBarSubTitleWrapper>
                  <ol>
                    {ContentList?.map(
                      ({ title }, index) =>
                        title && (
                          <li key={`content-subtitle-${index}`}>
                            <span>{`${index}.`}</span>
                            <Button
                              onClick={() =>
                                refs.current[index].scrollIntoView({
                                  behavior: "smooth",
                                })
                              }
                            >
                              {title}
                            </Button>
                          </li>
                        )
                    )}
                  </ol>
                </SideBarSubTitleWrapper>
                <SideBarTitle>
                  {contents.Template_Sidebar_Section_2_Title}
                </SideBarTitle>
                <SideBarRecentsWrapper>
                  {blogList
                    .sort(function (o1, o2) {
                      return Date.parse(o2.Date) - Date.parse(o1.Date);
                    })
                    .slice(0, 5)
                    .map((blog, index) => (
                      <div key={`recent-blog-${index}`}>
                        <IconArticle />
                        <Link to={`/blog/${blog.Url}`}>{blog.Title}</Link>
                      </div>
                    ))}
                </SideBarRecentsWrapper>
              </ArticleSideBarWrapper>
            </Box>
            <ArticleParagraphList>
              {ContentList?.map(({ title, titleSize, content }, index) => (
                <Box
                  key={`content-paragraph-${index}`}
                  ref={element => {
                    refs.current[index] = element;
                  }}
                  mb="1rem"
                >
                  <CustomTitle
                    textAlign="left"
                    lineHeight="1.875rem"
                    fontSize={`${titleSize}px`}
                    whiteSpace="pre-wrap"
                  >
                    {title}
                  </CustomTitle>
                  {MarkDownTranslator(content?.data?.content)}
                </Box>
              ))}
            </ArticleParagraphList>
          </ArticleContentWrapper>
          <ArticleFooter>{socialMediaList()}</ArticleFooter>
        </BlogTemplatWrapper>
      </BlogTemplateFrame>
    </Layout>
  );
};

export default BlogTemplate;

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
        Template_Sidebar_Section_1_Title
        Template_Sidebar_Section_2_Title
        Blog_Type_List {
          text
          link
        }
        Category_Type_List {
          text
          link
        }
      }
    }
    allStrapiBlog {
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
        Url
        Title
        Category
        Type
        Author
        Date
        UpdateDate
        Image {
          localFile {
            publicURL
          }
        }
        ContentList {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
      }
    }
  }
`;

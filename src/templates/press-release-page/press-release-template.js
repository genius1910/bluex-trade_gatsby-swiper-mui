import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import { DateFormator } from "../../utils/date-formator";
import Layout from "../layout";
import Seo from "../../templates/seo";
import { LayoutType } from "../../constants/page/layout";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

import IconFB from "../../images/icon/icon-fb-2.inline.svg";
import IconTwitter from "../../images/icon/icon-twitter-2.inline.svg";
import IconLinkedin from "../../images/icon/icon-linkedin-2.inline.svg";

const PressReleaseFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const PressReleaseWrapper = styled.div`
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
  margin-bottom: 3.188rem;

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

  & > span:first-child {
    margin-right: 1.25rem;
    color: ${Colors.BLUE_GREEN2};
  }
  & > span:last-child {
    color: ${Colors.GRAY5};
  }
  @media (max-width: ${WindowSize.laptopS}) {
    margin-bottom: 1.25rem;
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
  margin-bottom: 3.125rem;
  ${DefaultFont}
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

const PressReleaseTemplate = ({ data, pageContext, location }) => {
  const { Url, Title, Author, Content } = pageContext;
  const { allStrapiLayoutContent, allStrapiPressRelease } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const pressRelease = allStrapiPressRelease.nodes.find(
    node => node.Url === Url
  );
  const { SEO, Image } = pressRelease;

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      // console.log(pageContext);
    }
  }, [pageContext]);

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
      <PressReleaseFrame>
        <PressReleaseWrapper>
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
              <span>{Author}</span>
              <span>{DateFormator(pageContext.Date)}</span>
            </ArticleInfo>
            {socialMediaList()}
          </ArticleSub>
          <ArticleContentWrapper>
            {MarkDownTranslator(Content)}
          </ArticleContentWrapper>
          <ArticleFooter>{socialMediaList()}</ArticleFooter>
        </PressReleaseWrapper>
      </PressReleaseFrame>
    </Layout>
  );
};

export default PressReleaseTemplate;

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
    allStrapiPressRelease {
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
        Date
        Image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

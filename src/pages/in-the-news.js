import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import PressHeaderSection from "../templates/press-release-page/header-section";
import NewsListSection from "../templates/news-page/news-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const InTheNewsPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPressContent, allStrapiPressNew } =
    data;

  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiPressContent.nodes[0];
  const datas = allStrapiPressNew.nodes;

  return (
    <Layout type={LayoutType.WHITE} contents={layout} location={location}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <PressHeaderSection contents={contents} tabIndex={0} mobileIndex={1} />
      <NewsListSection datas={datas} />
    </Layout>
  );
};

export default InTheNewsPage;

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
    allStrapiPressContent {
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
        Press_Tab_Type {
          text
          link
        }
      }
    }
    allStrapiPressNew {
      nodes {
        description {
          title
        }
        link
        timeStamp
        image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

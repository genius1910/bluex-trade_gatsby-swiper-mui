import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import DeveloperMainSection from "../templates/developer-page/main-section";
import PartnerSection from "../templates/developer-page/partner-section";
import FeatureSection from "../templates/developer-page/feature-section";
import APITableSection from "../templates/developer-page/api-table-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const ForDeveloperPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiDeveloperContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiDeveloperContent.nodes[0];

  return (
    <Layout type={LayoutType.WHITE} location={location} contents={layout}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <DeveloperMainSection contents={contents} />
      <PartnerSection contents={contents} />
      <FeatureSection contents={contents} />
      <APITableSection contents={contents} />
    </Layout>
  );
};

export default ForDeveloperPage;

export const query = graphql`
  query ($locale: String!) {
    allStrapiLayoutContent(filter: { locale: { eq: $locale } }) {
      nodes {
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
            type
            url
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
    allStrapiDeveloperContent {
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
        Section_1_Btn {
          text
          link
        }
        Section_1_Image {
          localFile {
            publicURL
          }
        }
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_2_Title
        Section_2_Main_Logo {
          localFile {
            publicURL
          }
        }
        Section_2_Logo_List {
          localFile {
            publicURL
          }
        }
        Section_3_Title
        Section_3_Media_List {
          image {
            localFile {
              publicURL
            }
          }
          description {
            title
            content
          }
        }
        Section_4_Title
        Section_4_Table_Row_Header_1
        Section_4_Table_Row_Data_1 {
          category
          function {
            data
          }
        }
        Section_4_Table_Row_Header_2
        Section_4_Table_Row_Data_2 {
          category
          function {
            data
          }
        }
        Section_4_Table_Row_Header_3
        Section_4_Table_Row_Data_3 {
          category
          function {
            data
          }
        }
      }
    }
  }
`;

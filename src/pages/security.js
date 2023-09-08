import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import MainSection from "../templates/security-page/main-section";
import FeatureSection from "../templates/security-page/feature-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const DynamicPricingPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiSecurityContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiSecurityContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout type={LayoutType.WHITE} location={location} contents={layout}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <MainSection contents={contents} />
      <FeatureSection contents={contents} />
    </Layout>
  );
};

export default DynamicPricingPage;

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
    allStrapiSecurityContent {
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
        Section_2_Title
        Section_2_Media_Markdown_List {
          title
          image {
            localFile {
              publicURL
            }
          }
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

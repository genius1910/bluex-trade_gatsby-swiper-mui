import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import { LayoutType } from "../constants/page/layout";
import Seo from "../templates/seo";
import MainSection from "../templates/ecommerce-page/main-section";
import FeatureSection from "../templates/ecommerce-page/feature-section";
import SlideSection from "../templates/ecommerce-page/slide-section";
import QuotationSection from "../templates/ecommerce-page/quotation-section";
import PricingSection from "../templates/ecommerce-page/pricing-section";
export { Head } from "../templates/layout";

const EcommercePage = ({ data, location }) => {
  const {
    allStrapiLayoutContent,
    allStrapiEcommerceContent,
  } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiEcommerceContent.nodes[0];

  return (
    <Layout type={LayoutType.WHITE} location={location} contents={layout}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <MainSection contents={contents} />
      <FeatureSection contents={contents} />
      <SlideSection contents={contents} />
      <QuotationSection contents={contents} />
      <PricingSection contents={contents} />
    </Layout>
  );
};

export default EcommercePage;

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
    allStrapiEcommerceContent(filter: { locale: { eq: $locale } }) {
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
        Section_1_Title
        Section_1_Content
        Section_1_Image {
          localFile {
            publicURL
          }
        }
        Section_1_Button
        Section_1_Media_List {
          image {
            localFile {
              publicURL
            }
          }
          description {
            title
          }
        }
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_2_Title
        Section_2_Media_List {
          image {
            localFile {
              publicURL
            }
          }
          description {
            title
          }
        }
        Section_3_Tab_Media {
          tag
          image {
            localFile {
              publicURL
            }
          }
          description {
            content
          }
          button {
            text
            link
          }
        }
        Section_4_Image {
          localFile {
            publicURL
          }
        }
        Section_4_Content
        Section_4_Speaker_Paragraph {
          title
          content
        }
        Section_4_Bg {
          localFile {
            publicURL
          }
        }
        Section_5_Title
        Section_5_Table_Headers {
          data
        }
        Section_5_Table_Rows {
          header
          cells {
            data
          }
        }
        Section_5_Notification
      }
    }
  }
`;

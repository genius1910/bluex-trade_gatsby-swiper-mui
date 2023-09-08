import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import PricingDetails from "../templates/pricing-page/pricing-details";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const PricingPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPricing, allStrapiPricingContent } =
    data;
  const layout = allStrapiLayoutContent.nodes[0];
  const pricings = allStrapiPricing.nodes;
  const contents = allStrapiPricingContent.nodes[0];

  return (
    <Layout
      type={LayoutType.WHITE}
      contents={layout}
      location={location}
      fori18nPath={location.pathname}
    >
      <Seo title={contents.SEO.title} description={contents.SEO.description} />
      <PricingDetails contents={contents} pricings={pricings} />
    </Layout>
  );
};

export default PricingPage;

export const query = graphql`
  query ($locale: String!) {
    allStrapiLayoutContent(filter: { locale: { eq: $locale } }) {
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
    allStrapiPricing(
      filter: { locale: { eq: $locale } }
      sort: { fields: [Order], order: [ASC] }
    ) {
      nodes {
        Title
        Content {
          data {
            Content
          }
        }
        Details {
          title
          others
          comment
          list {
            name
            price
          }
        }
        Note {
          data {
            Note
          }
        }
        Order
      }
    }
    allStrapiPricingContent(filter: { locale: { eq: $locale } }) {
      nodes {
        SEO {
          title
          description
        }
        Section_1_Paragraph {
          title
          content
        }
        Section_3_Title
        Section_3_Button {
          text
          link
        }
        Modal_Trigger_Keyword
        Modal_1_Title
        Modal_1_Pricing_List {
          name
          price
        }
        Modal_1_Comment
        Modal_2_Title
        Modal_2_Local_Fees_Header_List {
          content
        }
        Modal_2_Local_Fees_Group_List {
          area
          locals {
            country
            currency
            method
            fee
          }
        }
      }
    }
  }
`;

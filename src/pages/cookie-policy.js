import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import CookiePolicyMain from "../templates/policy-page/cookie-policy";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const CookiePolicyPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPolicyContent } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiPolicyContent.nodes[0];

  return (
    <Layout type={LayoutType.SUPPORT} contents={layout} location={location}>
      <Seo
        title={contents.Cookie_Policy_SEO.title}
        description={contents.Cookie_Policy_SEO.description}
      />
      <CookiePolicyMain path={location.pathname} contents={contents} />
    </Layout>
  );
};

export default CookiePolicyPage;

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
    allStrapiPolicyContent {
      nodes {
        Sidebar_List {
          text
          link
        }
        Cookie_Policy_SEO {
          title
          description
        }
        Cookie_Policy_Title
        Cookie_Policy_TimeStamp
        Cookie_Policy_Paragraph_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
        Cookie_Policy_Table_Headers {
          content
        }
        Cookie_Policy_Bluextrade_Table {
          name
          provider
          type
          expiry
          purpose
        }
        Cookie_Policy_Bluexpay_Table {
          name
          provider
          type
          expiry
          purpose
        }
      }
    }
  }
`;

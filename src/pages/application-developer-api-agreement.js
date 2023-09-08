import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import PolicyTemplateMain from "../templates/policy-page/policy-template";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const DeveloperAPIAgreementPage = ({ data, location }) => {
  const {
    allStrapiLayoutContent,
    allStrapiPolicyContent,
    allStrapiPolicyBxtradeContent,
  } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const sidebar = allStrapiPolicyContent.nodes[0];
  const contents = allStrapiPolicyBxtradeContent.nodes[0];

  return (
    <Layout type={LayoutType.SUPPORT} contents={layout} location={location}>
      <Seo
        title={contents.Api_Agreement_SEO.title}
        description={contents.Api_Agreement_SEO.description}
      />
      <PolicyTemplateMain
        path={location.pathname}
        sidebarList={sidebar.Sidebar_List}
        title={contents.Api_Agreement_Title}
        date={contents.Api_Agreement_TimeStamp}
        paragraphs={contents.Api_Agreement_Paragraph_List}
        isOrderList={true}
      />
    </Layout>
  );
};

export default DeveloperAPIAgreementPage;

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
      }
    }
    allStrapiPolicyBxtradeContent {
      nodes {
        Api_Agreement_SEO {
          title
          description
        }
        Api_Agreement_Title
        Api_Agreement_TimeStamp
        Api_Agreement_Paragraph_List {
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

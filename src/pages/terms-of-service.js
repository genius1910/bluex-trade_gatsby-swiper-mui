import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import TermsOfServiceMain from "../templates/policy-page/terms-of-service";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const TermsOfServicePage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPolicyContent } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiPolicyContent.nodes[0];

  return (
    <Layout type={LayoutType.SUPPORT} contents={layout} location={location}>
      <Seo
        title={contents.Terms_Of_Service_SEO.title}
        description={contents.Terms_Of_Service_SEO.description}
      />
      <TermsOfServiceMain path={location.pathname} contents={contents} />
    </Layout>
  );
};

export default TermsOfServicePage;

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
        Terms_Of_Service_SEO {
          title
          description
        }
        Terms_Of_Service_Title
        Terms_Of_Service_Timestamp
        Terms_Of_Service_Preivew_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
        Terms_Of_Service_Paragraph_List {
          titleSize
          content {
            data {
              content
            }
          }
        }
        Terms_Of_Service_Exhibit_List {
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

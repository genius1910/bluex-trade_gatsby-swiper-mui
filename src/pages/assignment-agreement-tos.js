import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import PolicyTemplateMain from "../templates/policy-page/policy-template";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const AssignmentAgreementPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPolicyContent } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiPolicyContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout type={LayoutType.SUPPORT} contents={layout} location={location}>
      <Seo
        title={contents.Assignment_Agreement_SEO.title}
        description={contents.Assignment_Agreement_SEO.description}
      />
      <PolicyTemplateMain
        path={location.pathname}
        sidebarList={contents.Sidebar_List}
        title={contents.Assignment_Agreement_Title}
        date={contents.Assignment_Agreement_TimeStamp}
        paragraphs={contents.Assignment_Agreement_Paragraph_List}
      />
    </Layout>
  );
};

export default AssignmentAgreementPage;

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
        Assignment_Agreement_SEO {
          title
          description
        }
        Assignment_Agreement_Title
        Assignment_Agreement_TimeStamp
        Assignment_Agreement_Paragraph_List {
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

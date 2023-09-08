import React from "react";
import { graphql } from "gatsby";

import Layout from "../../templates/layout";
import { LayoutType } from "../../constants/page/layout";
import PILResourcesMainSection from "../../templates/pil-referral-program-page/resources/main-section";
import PILResourcesListSection from "../../templates/pil-referral-program-page/resources/resources-list";
export { Head } from "../../templates/layout";

const PILReferralProgramResourcesPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiResourcesContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiResourcesContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout
      type={LayoutType.NONE}
      contents={layout}
      location={location}
      fori18nPath={location.pathname}
    >
      <PILResourcesMainSection contents={contents} />
      <PILResourcesListSection contents={contents} />
    </Layout>
  );
};

export default PILReferralProgramResourcesPage;

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
    allStrapiResourcesContent {
      nodes {
        Section_1_Paragraph {
          title
          content
        }
        Section_1_Image {
          localFile {
            publicURL
          }
        }
        Section_2_Guides_Title
        Section_2_Guides_Icon {
          localFile {
            publicURL
          }
        }
        Section_2_Flyers_Title
        Section_2_Flyers_Icon {
          localFile {
            publicURL
          }
        }
        Section_2_Referrer_Title
        Section_2_Referrer_List {
          link
          type
          content {
            title
            content
          }
          timestamp
        }
        Section_2_PIL_Customer_Title
        Section_2_PIL_Customer_List {
          link
          type
          content {
            title
            content
          }
          timestamp
        }
      }
    }
  }
`;

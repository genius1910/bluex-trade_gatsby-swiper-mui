import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import MainSection from "../templates/pil-referral-program-page/main-section";
import AttachedSection from "../templates/pil-referral-program-page/attached-section";
import DescriptionSection from "../templates/pil-referral-program-page/description-section";
import StepsSection from "../templates/pil-referral-program-page/steps-section";
import FAQSection from "../templates/front-page/faq-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const ReferralProgramPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiPilReferralProgramContent } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];
  const contents = allStrapiPilReferralProgramContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout
      type={LayoutType.WHITE}
      contents={layout}
      location={location}
      signInBtn={
        process.env.GATSBY_ENV_TYPE === "PROD"
          ? contents.Sign_In_Button
          : contents.Sign_In_Staging_Button
      }
    >
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <MainSection contents={contents} />
      <AttachedSection contents={contents} />
      <DescriptionSection contents={contents} />
      <StepsSection contents={contents} />
      <FAQSection
        title={contents.Section_4_Title}
        faqs={contents.Section_4_FAQ_List}
      />
    </Layout>
  );
};

export default ReferralProgramPage;

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
    allStrapiPilReferralProgramContent {
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
        Sign_In_Button {
          text
          link
        }
        Sign_In_Staging_Button {
          text
          link
        }
        Section_1_Paragraph {
          title
          content
        }
        Section_1_Button {
          text
          link
        }
        Section_1_Staging_Button {
          text
          link
        }
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_1_Attached_Title
        Section_1_Attached_Sub_Title
        Section_1_Attached_Content
        Section_1_Attached_Button {
          text
          link
        }
        Section_2_Paragraph {
          title
          content
        }
        Section_2_Icon {
          localFile {
            publicURL
          }
        }
        Section_2_Steps {
          content
        }
        Section_3_Title
        Section_3_Step_Text
        Section_3_Steps_Detail {
          title
          content
        }
        Section_3_Paragraph {
          title
          content
        }
        Section_3_Price_List {
          name
          price
        }
        Section_4_Title
        Section_4_FAQ_List {
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

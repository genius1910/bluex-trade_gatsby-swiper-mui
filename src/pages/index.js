import React, { useState } from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import FrontMainSection from "../templates/front-page/main-section";
import AwardSection from "../templates/front-page/award-section";
import DescriptionSection from "../templates/front-page/description-section";
import PageIntroSection from "../templates/front-page/page-intro-section";
import LogoSection from "../templates/front-page/logo-section";
import TestimonialSection from "../templates/front-page/testimonial-section";
import FAQSection from "../templates/front-page/faq-section";
import ContactSection from "../templates/front-page/contact-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const PILModal = loadable(() => import("../components/pay-it-later-modal"));

const IndexPage = ({ data, location }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    allStrapiLayoutContent,
    allStrapiFrontContent,
    allStrapiModalContent,
  } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiFrontContent.nodes[0];
  const modalContents = allStrapiModalContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(modalContents);
    }
  }, [modalContents]);

  return (
    <Layout
      type={LayoutType.WHITE}
      contents={layout}
      location={location}
      fori18nPath={location.pathname}
    >
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <FrontMainSection contents={contents} btnCallback={setShowModal} />
      <AwardSection contents={contents} />
      <DescriptionSection contents={contents} />
      <PageIntroSection contents={contents} />
      <LogoSection contents={contents} />
      <TestimonialSection contents={contents} />
      <FAQSection
        title={contents.Section_7_Title}
        faqs={contents.Section_7_FAQ_List}
      />
      <ContactSection
        title={contents.Section_8_Content?.data?.Section_8_Content}
        linkButton={contents.Section_8_Button}
        bg={contents.Section_8_Bg}
      />
      {typeof window !== `undefined` && showModal && (
        <PILModal
          showModal={showModal}
          onCloseModal={setShowModal}
          contents={modalContents}
        />
      )}
    </Layout>
  );
};

export default IndexPage;

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
    allStrapiFrontContent(filter: { locale: { eq: $locale } }) {
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
        Section_1_Image_Preview {
          localFile {
            publicURL
          }
        }
        Section_1_Button {
          text
          link
        }
        Section_2_Title {
          data {
            Section_2_Title
          }
        }
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
        Section_3_Type
        Section_3_Title
        Section_3_Title_Styled_Keyword
        Section_3_Content
        Section_3_Image {
          localFile {
            publicURL
          }
        }
        Section_3_Feature_List {
          content
        }
        Section_3_Button {
          text
          link
        }
        Section_4_Page_Intro_List {
          title
          content
          attachment {
            text
            link
          }
          button {
            text
            link
          }
          background {
            localFile {
              publicURL
            }
          }
        }
        Section_5_Title
        Section_5_Logo_List {
          localFile {
            publicURL
          }
        }
        Section_6_Title
        Section_6_Testimonial_List {
          content
          name
          position
          company
        }
        Section_7_Title
        Section_7_FAQ_List {
          title
          titleSize
          content {
            data {
              content
            }
          }
        }
        Section_8_Content {
          data {
            Section_8_Content
          }
        }
        Section_8_Button {
          text
          link
        }
        Section_8_Bg {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiModalContent {
      nodes {
        PIL_Modal_Title
        PIL_Modal_Content {
          data {
            PIL_Modal_Content
          }
        }
        PIL_Modal_Comment
        PIL_Modal_Image {
          localFile {
            publicURL
          }
        }
        PIL_Modal_Paragraph {
          title
          content
        }
        PIL_Modal_Name_Label
        PIL_Modal_Email_Label
        PIL_Modal_Country_Label
        PIL_Modal_Company_Label
        PIL_Modal_Submit_Btn
        PIL_Modal_Successful_Message
        PIL_Modal_Successful_Btn
      }
    }
  }
`;

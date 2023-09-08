import React, { useState } from "react";
import { graphql } from "gatsby";
import loadable from "@loadable/component";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import PayItLaterMainSection from "../templates/pay-it-later-page/main-section";
import FeatureSection from "../templates/pay-it-later-page/feature-section";
import PayTypeSection from "../templates/pay-it-later-page/pay-type-section";
import ServiceIntroSection from "../templates/pay-it-later-page/service-intro-section";
import VendorSection from "../templates/pay-it-later-page/vendor-section";
// import TestimonialSection from "../templates/pay-it-later-page/testimonial-section";
import ContactSection from "../templates/pay-it-later-page/contact-section";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const PILModal = loadable(() => import("../components/pay-it-later-modal"));

const PayItLaterPage = ({ data, location }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    allStrapiPayItLaterContent,
    allStrapiLayoutContent,
    allStrapiModalContent,
  } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiPayItLaterContent.nodes[0];
  const modalContents = allStrapiModalContent.nodes[0];

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
      fori18nPath={location.pathname}
    >
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <PayItLaterMainSection contents={contents} btnCallback={setShowModal} />
      <FeatureSection contents={contents} />
      <PayTypeSection contents={contents} />
      <ServiceIntroSection contents={contents} />
      <VendorSection contents={contents} />
      {/* <TestimonialSection contents={contents} /> */}
      <ContactSection contents={contents} />
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

export default PayItLaterPage;

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
    allStrapiPayItLaterContent(filter: { locale: { eq: $locale } }) {
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
        Section_1_Button {
          text
          link
        }
        Section_1_Feature_List {
          content
        }
        Section_1_Image {
          localFile {
            publicURL
          }
        }
        Section_1_Video {
          localFile {
            publicURL
          }
        }
        Section_1_Video_Thumbnail {
          localFile {
            publicURL
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
            content
          }
        }
        Section_3_Service_Intro_Title
        Section_3_Service_Intro_List {
          title
          content {
            data {
              content
            }
          }
          button {
            text
            link
          }
        }
        Section_3_Title
        Section_3_Image {
          localFile {
            publicURL
          }
        }
        Section_3_Media_List {
          image {
            localFile {
              publicURL
            }
          }
          description {
            title
            content
          }
        }
        Section_4_Title
        Section_4_Image {
          localFile {
            publicURL
          }
        }
        Section_4_Main_Paragraph {
          title
          content
        }
        Section_4_Paragraph {
          title
          content
        }
        Section_4_Button {
          text
          link
        }
        Section_4_Vendor_List {
          localFile {
            publicURL
          }
        }
        Section_5_Title
        Section_5_Testimonial_List {
          content
          logo {
            localFile {
              publicURL
            }
          }
          speaker
          title
        }
        Section_6_Title
        Section_6_Content {
          data {
            Section_6_Content
          }
        }
        Section_6_Link_Button {
          text
          link
        }
        Section_6_Image {
          localFile {
            publicURL
          }
        }
        Modal_Title
        Modal_Content
        Modal_Submit_Btn
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

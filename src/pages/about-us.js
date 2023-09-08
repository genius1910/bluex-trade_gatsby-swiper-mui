import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import AboutUsMainSection from "../templates/about-us-page/main-section";
import AboutUsDescriptionSection from "../templates/about-us-page/description-section";
import AboutUsMissionSection from "../templates/about-us-page/mission-section";
import LeadershipSection from "../templates/about-us-page/leadership-section";
import PartnerSection from "../templates/about-us-page/partner-section";
import TestimonialSection from "../templates/about-us-page/testimonial-section";
import ReadyStart from "../templates/vendor-page/ready-start";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const AboutUsPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiAboutUsContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiAboutUsContent.nodes[0];

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
      <AboutUsMainSection contents={contents} />
      <AboutUsDescriptionSection contents={contents} />
      <AboutUsMissionSection contents={contents} />
      <LeadershipSection contents={contents} />
      <PartnerSection contents={contents} />
      <TestimonialSection contents={contents} />
      <ReadyStart
        contents={{
          title: contents.Section_7_Title,
          btn: contents.Section_7_Button,
          img: contents.Section_7_Icon,
        }}
      />
      {/* <AboutUsContactSection contents={contents} /> */}
    </Layout>
  );
};

export default AboutUsPage;

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
    allStrapiAboutUsContent(filter: { locale: { eq: $locale } }) {
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
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_2_Main_Text
        Section_2_Paragraph {
          title
          content
        }
        Section_2_Image {
          localFile {
            publicURL
          }
        }
        Section_3_Paragraph {
          title
          content
        }
        Section_3_Icon {
          localFile {
            publicURL
          }
        }
        Section_3_Image {
          localFile {
            publicURL
          }
        }
        Section_4_Paragraph {
          title
          content
        }
        Section_4_Profile_List {
          avatar {
            localFile {
              publicURL
            }
          }
          name
          title
          linkedin {
            link
            media {
              localFile {
                publicURL
              }
            }
          }
        }
        Section_5_Investors_Title
        Section_5_Investors_Logo {
          localFile {
            publicURL
          }
        }
        Section_5_Partners_Title
        Section_5_Partners_Logo {
          localFile {
            publicURL
          }
        }
        Section_6_Title
        Section_6_Testimonial_List {
          content
          logo {
            localFile {
              publicURL
            }
          }
          speaker
          title
        }
        Section_7_Title
        Section_7_Icon {
          localFile {
            publicURL
          }
        }
        Section_7_Button {
          text
          link
        }
      }
    }
  }
`;

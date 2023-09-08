import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import VendorMainSection from "../templates/vendor-page/main-section";
import IntroSection from "../templates/vendor-page/intro-section";
import AdvantageSection from "../templates/vendor-page/advantage-section";
import SecuritySection from "../templates/vendor-page/security-section";
import ReadyStart from "../templates/vendor-page/ready-start";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const VendorPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiVendorContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiVendorContent.nodes[0];

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
      <VendorMainSection contents={contents} />
      <IntroSection contents={contents} />
      <AdvantageSection contents={contents} />
      <SecuritySection contents={contents} />
      <ReadyStart
        contents={{
          title: contents.Section_5_Title,
          btn: contents.Section_5_Button,
          img: contents.Section_5_Image,
        }}
      />
    </Layout>
  );
};

export default VendorPage;

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
    allStrapiVendorContent(filter: { locale: { eq: $locale } }) {
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
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_1_Button {
          text
          link
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
        Section_3_Gallery {
          image {
            width
            height
            localFile {
              publicURL
            }
          }
          type
          width
          height
          description {
            title
            content
          }
        }
        Section_4_Media_List {
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
        Section_4_Bg {
          localFile {
            publicURL
          }
        }
        Section_5_Title
        Section_5_Button {
          text
          link
        }
        Section_5_Image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import { LayoutType } from "../constants/page/layout";
import Seo from "../templates/seo";
import CareerMainSection from "../templates/career-page/main-section";
import DescriptionSection from "../templates/career-page/description-section";
import FeatureSection from "../templates/career-page/feature-section";
import BenefitSection from "../templates/career-page/benefit-section";
import GallerySection from "../templates/career-page/gallery-section";
import PositionSection from "../templates/career-page/position-section";
// import ContactSection from "../templates/front-page/contact-section";
export { Head } from "../templates/layout";

const CareersPage = ({ data, location }) => {
  const { allStrapiLayoutContent, allStrapiCareerContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiCareerContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout type={LayoutType.WHITE} location={location} contents={layout}>
      <Seo
        title={contents.SEO.title}
        description={contents.SEO.description}
        image={contents.SEO.image?.localFile?.publicURL}
      />
      <CareerMainSection contents={contents} />
      <DescriptionSection contents={contents} />
      <FeatureSection contents={contents} />
      <BenefitSection contents={contents} />
      <GallerySection contents={contents} />
      <PositionSection contents={contents} />
      {/* <ContactSection
        title={contents.Section_7_Content?.data?.Section_7_Content}
        linkButton={contents.Section_7_Button}
        bg={contents.Section_7_Bg}
      /> */}
    </Layout>
  );
};

export default CareersPage;

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
    allStrapiCareerContent {
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
        Section_1_Bg {
          localFile {
            publicURL
          }
        }
        Section_1_Content {
          data {
            Section_1_Content
          }
        }
        Section_2_Title
        Section_2_Image {
          localFile {
            publicURL
          }
        }
        Section_2_Content {
          data {
            Section_2_Content
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
        Section_5_Title
        Section_5_Images {
          localFile {
            publicURL
          }
        }
        Section_6_Paragraph {
          title
          content
        }
        Section_6_Position_Types {
          text
          link
        }
        Section_6_Position_List {
          type
          description {
            title
            content
          }
          link {
            text
            link
          }
        }
        Section_7_Content {
          data {
            Section_7_Content
          }
        }
        Section_7_Button {
          text
          link
        }
        Section_7_Bg {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;

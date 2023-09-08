import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";
import FAQMain from "../templates/support-page/faq-main";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const FAQPage = ({ data, location }) => {
  const [setShowModal] = useState(false);
  const { allStrapiLayoutContent, allStrapiFaqContent } = data;
  const layout = allStrapiLayoutContent.nodes[0];
  const contents = allStrapiFaqContent.nodes[0];

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
    }
  }, [contents]);

  return (
    <Layout
      type={LayoutType.SUPPORT}
      contents={layout}
      location={location}
      fori18nPath={location.pathname}
    >
      <Seo title={contents.SEO.title} description={contents.SEO.description} />
      <FAQMain onShowModal={setShowModal} contents={contents} />
    </Layout>
  );
};

export default FAQPage;

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
    allStrapiFaqContent(filter: { locale: { eq: $locale } }) {
      nodes {
        SEO {
          title
          description
        }
        Title
        FAQ {
          title
          content
        }
        FAQ_Modal_Btn
        FAQ_Link_Btn
      }
    }
  }
`;

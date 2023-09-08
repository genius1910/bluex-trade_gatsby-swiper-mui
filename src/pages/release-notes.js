import React from "react";
import { graphql } from "gatsby";

import ReleaseNoteList from "../templates/release-note-page/release-note-list";
import Layout from "../templates/layout";
import { LayoutType } from "../constants/page/layout";
export { Head } from "../templates/layout";

const ReleaseNotesPage = ({ data, location }) => {
  const {
    allStrapiReleaseNote,
    allStrapiReleaseNoteContent,
    allStrapiLayoutContent,
  } = data;
  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout?.locale === "en"
  )[0];

  const contents = allStrapiReleaseNoteContent.nodes[0];
  const datas = allStrapiReleaseNote.nodes;

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log(contents);
      console.log(datas);
    }
  }, [contents, datas]);

  return (
    <Layout type={LayoutType.WHITE} contents={layout} location={location}>
      <ReleaseNoteList contents={contents} datas={datas} />
    </Layout>
  );
};

export default ReleaseNotesPage;

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
    allStrapiReleaseNoteContent {
      nodes {
        Title
        Main_Paragraph {
          title
          content
        }
        Main_Banner_Bg {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiReleaseNote {
      nodes {
        Url
        Date
        Paragraph {
          title
        }
      }
    }
  }
`;

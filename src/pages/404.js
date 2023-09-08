import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { navigate } from "gatsby";

import Layout from "../templates/layout";
import Seo from "../templates/seo";

import Paragraph from "../components/paragraph";
import { Colors } from "../constants/share/colors";
import { LayoutStyle } from "../constants/style/layout";

const NotFoundPageFrame = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  overflow: hidden;
`;

const NotFoundPageWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  box-sizing: border-box;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
`;

const NotFoundPage = ({ data, location }) => {
  const { allStrapiLayoutContent } = data;

  const layout = allStrapiLayoutContent.nodes.filter(
    layout => layout.locale === "en"
  )[0];

  React.useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Layout contents={layout} location={location}>
      <Seo title="404: Not found" />
      <NotFoundPageFrame>
        <NotFoundPageWrapper>
          <Paragraph title="Not found" alignItems="flex-start">
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
          </Paragraph>
        </NotFoundPageWrapper>
      </NotFoundPageFrame>
    </Layout>
  );
};

export default NotFoundPage;

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
  }
`;

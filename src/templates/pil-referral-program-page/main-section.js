import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const MainSectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-position-x: center;
  overflow-x: hidden;
`;

const MainSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  height: 36.25rem;
  padding-top: 11rem;

  > button {
    width: 10rem;
    height: 2.25rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
`;

const PILReferalProgramMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainParagraph title={contents.Section_1_Paragraph.title}>
          {contents.Section_1_Paragraph.content}
        </MainParagraph>
        <CustomButton
          onClick={() => {
            NavigateNewTab(
              process.env.GATSBY_ENV_TYPE === "PROD"
                ? contents.Section_1_Button?.link
                : contents.Section_1_Staging_Button?.link
            );
          }}
        >
          {process.env.GATSBY_ENV_TYPE === "PROD"
            ? contents.Section_1_Button?.text
            : contents.Section_1_Staging_Button?.text}
        </CustomButton>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default PILReferalProgramMainSection;

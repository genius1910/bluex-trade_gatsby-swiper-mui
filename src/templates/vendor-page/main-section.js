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
  background-position: center;
`;

const MainSectionWrapper = styled.div`
  ${LayoutStyle}
  box-sizing: border-box;
  height: 36.25rem;
  padding-top: 11rem;
`;

const TitleWrapper = styled.div`
  width: 28.75rem;
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 1.875rem;
  }
  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
`;

const VendorMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <TitleWrapper>
          <MainParagraph title={contents.Section_1_Paragraph.title}>
            {contents.Section_1_Paragraph.content}
          </MainParagraph>
          <CustomButton
            width="9.063rem"
            padding="0.375rem 1.5rem"
            lineHeight="1.5rem"
            fontSize="0.875rem"
            onClick={() => NavigateNewTab(contents.Section_1_Button.link)}
          >
            {contents.Section_1_Button.text}
          </CustomButton>
        </TitleWrapper>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default VendorMainSection;

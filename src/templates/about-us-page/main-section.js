import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { LayoutStyle } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const MainSectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
  border-bottom: 0.625rem solid ${Colors.SECONDARY};
`;

const MainSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 36.25rem;
  padding-top: 11rem;
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
`;

const AboutUsMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainParagraph title={contents.Section_1_Paragraph.title}>
          {contents.Section_1_Paragraph.content}
        </MainParagraph>
        <CustomButton
          width="9.063rem"
          fontSize="0.875rem"
          lineHeight="1.71"
          onClick={() => NavigateNewTab(contents.Section_1_Button.link)}
        >
          {contents.Section_1_Button.text}
        </CustomButton>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default AboutUsMainSection;

import React from "react";
import styled from "styled-components";

import Paragraph from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

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
  padding-top: 11.5rem;
  padding-bottom: 9rem;

  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 7.125rem;
    padding-bottom: 4.75rem;
  }
`;

const TitleWrapper = styled.div`
  width: 28.75rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
  }
`;

const StyleParagraph = styled(Paragraph)`
  margin-bottom: 1.875rem;

  > div:first-child {
    line-height: 3.375rem;
    color: ${Colors.WHITE};
    font-size: 2.25rem;
  }
`;

const PayerMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <TitleWrapper>
          <StyleParagraph
            title={contents.Section_1_Paragraph.title}
            gap="1.875rem"
            contentColor={Colors.WHITE}
            alignItems="flex-start"
          >
            {contents.Section_1_Paragraph.content}
          </StyleParagraph>
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

export default PayerMainSection;

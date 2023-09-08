import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const MainSectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
`;

const MainSectionWrapper = styled.div`
  ${LayoutStyle}
  box-sizing: border-box;
  padding-top: 9.938rem;
  padding-bottom: 7rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 7.5rem;
    padding-bottom: 5rem;
  }
`;

const MainMediaFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 32rem;

  > div:last-child {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    img {
      width: 20rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    width: 100%;

    img {
      width: 100%;
    }
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
  margin-bottom: 2rem;

  > div {
    &:first-child {
      max-width: 32rem;
      font-size: 2.25rem;
    }
    &:last-child {
      font-size: 0.875rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    > div:last-child {
      width: 100%;
      text-align: center;
    }
  }
`;

const DynamicPricingMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainMediaFrame>
          <MainParagraph title={contents.Section_1_Paragraph.title}>
            {contents.Section_1_Paragraph.content}
          </MainParagraph>
        </MainMediaFrame>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default DynamicPricingMainSection;

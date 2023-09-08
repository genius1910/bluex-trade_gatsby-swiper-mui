import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
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
  height: 36.25rem;
  padding-top: 4.875rem;
  padding-bottom: 9.125rem;

  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 4.625rem;
    padding-bottom: 5rem;
  }
`;

const MainMediaFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: ${WindowSize.laptopS}) {
    img {
      width: 100%;
    }
  }
`;

const MainMediaDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;

  > div:last-child {
    position: absolute;
    right: 0rem;
    bottom: -9.125rem;
    z-index: 0;
  }
  > button {
    position: relative;
    z-index: 10;
    height: 2.25rem;
    padding: 0.375rem 2rem;
    font-size: 1rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;

    > div:last-child {
      right: -2.5rem;
      bottom: -5rem;
    }
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
  position: relative;
  z-index: 10;
  padding-top: 4.875rem;
`;

const DeveloperMainSection = ({ contents }) => {
  const navigateUrl = url => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainMediaFrame>
          <MainMediaDescription>
            <MainParagraph title={contents.Section_1_Paragraph.title}>
              {contents.Section_1_Paragraph.content}
            </MainParagraph>
            <CustomButton
              onClick={() => navigateUrl(contents.Section_1_Btn.link)}
            >
              {contents.Section_1_Btn.text}
            </CustomButton>
            <div>
              <img
                src={contents.Section_1_Image?.localFile?.publicURL}
                alt={contents.Section_1_Image?.caption}
              />
            </div>
          </MainMediaDescription>
        </MainMediaFrame>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default DeveloperMainSection;

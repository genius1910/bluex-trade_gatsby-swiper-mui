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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36.25rem;

  @media (max-width: ${WindowSize.mobileL}) {
    height: auto;
    padding-top: 11rem;
  }
`;

const MainMediaFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  > div:last-child img {
    height: 35rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    margin-top: 2rem;

    > div:last-child {
      flex: 1 1 50%;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    margin-top: 0rem;

    > div:last-child {
      flex: 1 1 100%;
    }
  }
`;

const MainMediaDescription = styled.div`
  flex: 0 0 25.25rem;
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  > button {
    width: 10rem;
    height: 2.25rem;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    flex: 1 1 50%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 100%;
    align-items: center;
    margin-right: 0rem;
    margin-bottom: 1.875rem;
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
  width: 100%;
  margin-bottom: 4rem;

  > div {
    &:first-child {
      font-weight: 800;
      font-style: normal;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin-bottom: 2.5rem;

    > div {
      &:last-child {
        text-align: center;
      }
    }
  }
`;

const EcommerceMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainMediaFrame>
          <MainMediaDescription>
            <MainParagraph title={contents.Section_1_Title}>
              {contents.Section_1_Content}
            </MainParagraph>
            <CustomButton
              onClick={() => {
                window.location = "mailto:sales@bluextrade.com";
              }}
            >
              {contents.Section_1_Button}
            </CustomButton>
          </MainMediaDescription>
          <div>
            <img
              src={contents.Section_1_Image?.localFile?.publicURL}
              alt={contents.Section_1_Image?.caption}
            />
          </div>
        </MainMediaFrame>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default EcommerceMainSection;

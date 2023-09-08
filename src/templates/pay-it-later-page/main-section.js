import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
// import { NavigateNewTab } from "../header";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const PayItLaterMainFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: url(${props => props.$url});
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
`;

const MainBodyWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 36.25rem;
  padding-top: 11rem;

  @media (max-width: ${WindowSize.mobileL}) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    &:first-child {
      display: flex;
      flex-direction: column;
      margin-right: 7rem;
    }
    &:last-child {
      position: relative;

      img {
        max-width: 23.75rem;
      }
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    > div {
      &:first-child {
        align-items: center;
        margin-right: 1.5rem;
      }
      &:last-child {
        flex: 1 1 50%;

        img {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;

    > div {
      &:first-child {
        flex: 1 1 auto;
        height: 100%;
        margin-right: 0rem;
        margin-bottom: 2.5rem;
      }
    }
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
`;

const MainFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 3.25rem 0rem 3.188rem;
  background-image: linear-gradient(
    to bottom,
    rgba(128, 222, 239, 0.3),
    #4daacc
  );

  > div {
    padding: 0rem 1rem;
    border-right: 0.188rem solid rgba(256, 256, 256, 0.4);
    text-align: center;
    ${DefaultFont}
    font-size: 1.375rem;
    font-weight: bold;
    color: ${Colors.WHITE};

    &:last-child {
      border-right: none;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    padding: 1.875rem 0rem 0.65rem;

    > div {
      width: 100%;
      border-right: none;
      padding: initial;
      margin-bottom: 1.25rem;
    }
  }
`;

const PayItLaterMainSection = ({ contents, btnCallback }) => {
  return (
    <PayItLaterMainFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainBodyWrapper>
        <ContentWrapper>
          <div>
            <MainParagraph title={contents.Section_1_Paragraph.title}>
              {contents.Section_1_Paragraph.content}
            </MainParagraph>
            <CustomButton
              width="9.063rem"
              fontSize="0.875rem"
              lineHeight="1.5"
              onClick={() => btnCallback(true)}
            >
              {contents.Section_1_Button.text}
            </CustomButton>
          </div>
          <div>
            <img
              src={contents.Section_1_Image?.localFile?.publicURL}
              alt={contents.Section_1_Image?.caption}
            />
          </div>
        </ContentWrapper>
      </MainBodyWrapper>
      <MainFooterWrapper>
        {contents.Section_1_Feature_List.map(({ content }, index) => (
          <div key={`feture-item-${index}`}>{content}</div>
        ))}
      </MainFooterWrapper>
    </PayItLaterMainFrame>
  );
};

export default PayItLaterMainSection;

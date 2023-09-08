import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const QuotationFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-position: center;
`;

const QuotationWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 3.625rem;
  padding-bottom: 3.563rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70rem;
  padding: 3.25rem 5rem 1.875rem;
  background-color: rgba(256, 256, 256, 0.1);

  img {
    width: 26rem;
    margin-right: 3rem;
  }
  > div {
    flex: 0 1 29.75rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: column;
    width: 100%;
    padding: 1.875rem;

    img {
      width: 100%;
      margin-right: 0rem;
      margin-bottom: 1.25rem;
    }
    > div {
      flex: 1 1 auto;
    }
  }
`;

const QuotationSection = ({ contents }) => {
  return (
    <QuotationFrame $url={contents.Section_4_Bg?.localFile?.publicURL}>
      <QuotationWrapper>
        <ContentWrapper>
          <img
            src={contents.Section_4_Image?.localFile?.publicURL}
            alt={contents.Section_4_Image?.caption}
          />
          <div>
            <CustomTitle
              marginBottom="1.25rem"
              textAlign="left"
              whiteSpace="wrap"
              color={Colors.WHITE}
              fontSize="1rem"
              fontWeight="normal"
            >
              {contents.Section_4_Content}
            </CustomTitle>
            <Paragraph
              title={contents.Section_4_Speaker_Paragraph.title}
              titleColor={Colors.SECONDARY}
              alignItems="flex-start"
              titleFontSize="1.25rem"
              contentFontSize="0.875rem"
              contentColor={Colors.GRAY8}
              gap="0.25rem"
            >
              {contents.Section_4_Speaker_Paragraph.content}
            </Paragraph>
          </div>
        </ContentWrapper>
      </QuotationWrapper>
    </QuotationFrame>
  );
};

export default QuotationSection;

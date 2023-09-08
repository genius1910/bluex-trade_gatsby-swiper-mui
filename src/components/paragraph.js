import React from "react";
import styled, { css } from "styled-components";

import { DefaultFont } from "../constants/style/default-font";
import { Colors } from "../constants/share/colors";
import { WindowSize } from "../constants/style/layout";

const ParagraphDiv = styled.div`
  width: ${props => props.$width};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$alignItems};
  margin-bottom: ${props => props.$marginBottom};
`;

const ParagraphTitle = styled.div`
  ${DefaultFont}
  margin-bottom: ${props => props.$gap};
  line-height: 2.625rem;
  text-align: ${props => props.$textAlign};
  color: ${props => props.$color};
  font-size: ${props => props.$fontSize};
  font-weight: bold;
  white-space: ${props => props.$whiteSpace};
`;

const ParagraphContext = styled.div`
  ${DefaultFont}
  line-height: 1.5rem;
  text-align: ${props => props.$textAlign};
  color: ${props => props.$color};
  font-size: 1rem;
  white-space: pre-wrap;
`;

const Paragraph = ({
  title,
  titleClass,
  titleTextAlign = "left",
  titleColor = Colors.PRIMARY,
  titleFontSize = "1.5rem",
  titleWhiteSpace = "pre-wrap",
  contentClass,
  contentTextAlign = "left",
  contentColor = Colors.PRIMARY,
  width = "100%",
  gap = "1.25rem",
  alignItems = "center",
  marginBottom = "0rem",
  className,
  children,
}) => {
  return (
    <ParagraphDiv
      className={className}
      $width={width}
      $alignItems={alignItems}
      $marginBottom={marginBottom}
    >
      <ParagraphTitle
        $textAlign={titleTextAlign}
        $color={titleColor}
        $fontSize={titleFontSize}
        $whiteSpace={titleWhiteSpace}
        $gap={gap}
        style={titleClass}
      >
        {title}
      </ParagraphTitle>
      <ParagraphContext
        $textAlign={contentTextAlign}
        $color={contentColor}
        style={contentClass}
      >
        {children}
      </ParagraphContext>
    </ParagraphDiv>
  );
};

export default Paragraph;

export const MainParagraphStyle = css`
  align-items: flex-start;
  margin-bottom: 1.875rem;

  > div {
    &:first-child {
      max-width: 30rem;
      margin-bottom: 1.875rem;
      line-height: 3.375rem;
      font-size: 2.25rem;
      font-weight: bold;
      color: ${Colors.WHITE};
      letter-spacing: normal;
      word-break: keep-all;
    }
    &:last-child {
      max-width: 32.5rem;
      line-height: 1.875rem;
      font-size: 1rem;
      font-weight: normal;
      color: ${Colors.WHITE};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;

    > div:first-child {
      text-align: left;
    }
    > div:last-child {
      text-align: left;
    }
  }
`;

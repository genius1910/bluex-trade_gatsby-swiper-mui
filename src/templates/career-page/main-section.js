import React from "react";
import styled from "styled-components";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import { LayoutStyle } from "../../constants/style/layout";

const MainSectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
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

  > div:last-child {
    p {
      margin: 0rem;
      margin-block-end: 0px;
    }
  }
`;

const CareerMainSection = ({ contents }) => {
  return (
    <MainSectionFrame $url={contents.Section_1_Bg?.localFile?.publicURL}>
      <MainSectionWrapper>
        <MainParagraph title={contents.Section_1_Title}>
          {MarkDownTranslator(
            contents.Section_1_Content.data?.Section_1_Content
          )}
        </MainParagraph>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default CareerMainSection;

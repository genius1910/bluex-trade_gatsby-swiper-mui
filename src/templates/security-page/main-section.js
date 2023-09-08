import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../components/paragraph";
import { LayoutStyle } from "../../constants/style/layout";

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
  padding-top: 11rem;
`;

const MainMediaFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}
`;

const SecurityMainSection = ({ contents }) => {
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

export default SecurityMainSection;

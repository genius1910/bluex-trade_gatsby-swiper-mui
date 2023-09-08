import React from "react";
import styled from "styled-components";

import Paragraph, { MainParagraphStyle } from "../../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../../constants/style/layout";

const MainSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background: linear-gradient(180deg, #183c5e 0%, #256081 100%);
`;

const HeaderWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  height: 36.25rem;
  padding-top: 6rem;

  > div:last-child {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    height: 40rem;
    flex-direction: column;
  }
`;

const MainParagraph = styled(Paragraph)`
  ${MainParagraphStyle}

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    align-items: center;
  }
`;

const PILResourcesMainSection = ({ contents }) => {
  return (
    <MainSectionFrame>
      <HeaderWrapper>
        <MainParagraph title={contents.Section_1_Paragraph.title}>
          {contents.Section_1_Paragraph.content}
        </MainParagraph>
        <div>
          <img
            src={contents.Section_1_Image?.localFile?.publicURL}
            alt={contents.Section_1_Image?.caption}
          />
        </div>
      </HeaderWrapper>
    </MainSectionFrame>
  );
};

export default PILResourcesMainSection;

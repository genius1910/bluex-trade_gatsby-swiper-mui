import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const ExhibitTemplateFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const ExhibitTemplateWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;

  @media (max-width: ${WindowSize.tablet}) {
    flex-direction: column;
    padding-top: 1.875rem;
  }
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  padding: 0rem 0rem 6.25rem 6.25rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};
  line-height: 1.25rem;
  font-size: 0.875rem;

  > * {
    text-align: left;
  }
  ul {
    margin: 1.25rem 0rem;
  }
  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
    padding: 1.875rem 0rem;
  }
`;

const ParagraphWrapper = styled.div`
  position: relative;
  margin-bottom: 1.875rem;

  > h5 {
    margin-top: 0rem;
    margin-bottom: 0.625rem;
    color: ${Colors.BLUE_DARK2};
    font-size: 0.875rem;
    font-weight: bold;
  }
`;

const SubTitleWrapper = styled(CustomTitle)`
  margin-bottom: 2.5rem;
  line-height: 1.75rem;
  text-align: center;
  white-space: pre-wrap;
  font-size: ${props => props.$fontSize};
  font-weight: bold;
  color: ${Colors.PRIMARY};
`;

const ExhibitTemplate = ({ paragraphs }) => {
  return (
    <ExhibitTemplateFrame>
      <ExhibitTemplateWrapper>
        <Box
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          flex="0 0 13.688rem"
          pt="2.125rem"
        />
        <ContentWrapper>
          {paragraphs.map(({ title, titleSize, content }, index) => (
            <ParagraphWrapper
              key={`exhibit-template-paragraphs-${index}`}
            >
              <SubTitleWrapper $fontSize={`${titleSize}px`}>
                {title}
              </SubTitleWrapper>
              {MarkDownTranslator(content.data.content)}
            </ParagraphWrapper>
          ))}
        </ContentWrapper>
      </ExhibitTemplateWrapper>
    </ExhibitTemplateFrame>
  );
};

export default ExhibitTemplate;

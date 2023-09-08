import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import StripBgDesign from "../../components/strip-bg-design";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const DescriptionSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: ${Colors.WHITE};
`;

const LeftStripBg = styled(StripBgDesign)`
  bottom: 13.5rem;
  left: -6rem;
  width: 41.125rem;
`;

const LeftFirstStrip = styled(Box)`
  width: 21.25rem;
  height: 1.375rem;
  margin-left: 9.25rem;
  margin-bottom: 1.25rem;
  opacity: 0.7;
  background-color: ${Colors.ORANGE};
`;

const LeftSecondStrip = styled(Box)`
  height: 2.75rem;
  margin-bottom: 1.5rem;
  opacity: 0.6;
  background-color: ${Colors.SECONDARY};
`;

const LeftThirdStrip = styled(Box)`
  width: 21.25rem;
  height: 1.375rem;
  margin-left: 9.25rem;
  background-color: ${Colors.THIRD};
`;

const DescriptionSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
  box-sizing: border-box;
  padding-top: 7.813rem;
  padding-bottom: 7.5rem;

  @media (max-width: ${WindowSize.tablet}) {
    flex-direction: column;
    padding-top: 2.5rem;
    padding-bottom: 3rem;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  > div {
    flex: 1 1 50%;
  }
  @media (max-width: ${WindowSize.tablet}) {
    margin-bottom: 1.875rem;

    > div {
      flex: 1 1 auto;
    }
  }
`;

const MediaWrapper = styled(ContentWrapper)`
  > div:first-child {
    position: relative;

    img {
      width: 100%;
    }
  }
  @media (max-width: ${WindowSize.tablet}) {
    flex-direction: column;
  }
`;

const MediaParagraph = styled(Paragraph)`
  align-items: flex-start;
  margin-top: -1rem;
  margin-left: 5rem;

  > div {
    &:first-child {
      margin-bottom: 0rem;
      line-height: 4.313rem;
      font-size: 2.5rem;
      color: ${Colors.SECONDARY};
    }
    &:last-child {
      line-height: 1.875rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: ${Colors.PRIMARY};

      p {
        margin: 0rem;
        margin-block: 0px;
      }
    }
  }
  @media (max-width: ${WindowSize.tablet}) {
    margin-top: 2.5rem;
    margin-left: 0rem;

    > div {
      width: 100%;
      text-align: center;
    }
  }
`;

const DescriptionSection = ({ contents }) => {
  return (
    <DescriptionSectionFrame>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <LeftStripBg>
          <LeftFirstStrip />
          <LeftSecondStrip />
          <LeftThirdStrip />
        </LeftStripBg>
      </Box>
      <DescriptionSectionWrapper>
        <MediaWrapper>
          <div>
            {
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={contents.Section_2_Image?.localFile?.publicURL}
                alt={contents.Section_2_Image?.caption}
              />
            }
          </div>
          <MediaParagraph title={contents.Section_2_Title}>
            {MarkDownTranslator(
              contents.Section_2_Content.data?.Section_2_Content
            )}
          </MediaParagraph>
        </MediaWrapper>
      </DescriptionSectionWrapper>
    </DescriptionSectionFrame>
  );
};

export default DescriptionSection;

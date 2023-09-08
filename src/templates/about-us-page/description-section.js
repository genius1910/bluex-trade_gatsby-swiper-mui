import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import StripBgDesign from "../../components/strip-bg-design";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const DescriptionSectionFrame = styled.div`
  position: relative;
  background-image: linear-gradient(
    to top,
    ${Colors.BLUE_LIGHT2} 0%,
    ${Colors.BLUE_LIGHT} 100%
  );
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const DescriptionSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 8rem;
  ${DefaultFont}
  line-height: 1.5rem;
  color: ${Colors.PRIMARY};

  img {
    max-width: 33.75rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: column;
    padding-top: 4.25rem;
    padding-bottom: 4.25rem;

    img {
      width: 100%;
    }
  }
`;

const RightStripBg = styled(StripBgDesign)`
  top: 15.625rem;
  right: -10.375rem;
  width: 21.313rem;
`;

const RightFirstStrip = styled.div`
  width: 12.5rem;
  margin-left: 7.5rem;
  margin-bottom: 3rem;
  height: 1.25rem;
  background-color: ${Colors.BG_GREEN4};
`;

const RightSecondStrip = styled.div`
  height: 2rem;
  background-color: ${Colors.BG_GREEN5};
`;

const RightThirdStrip = styled.div`
  width: 11.25rem;
  height: 0.875rem;
  margin-left: 6rem;
  margin-top: 0.25rem;
  background-color: ${Colors.THIRD};
`;

const ContentParagraph = styled(Paragraph)`
  margin-right: 6.25rem;

  > div {
    &:first-child {
      width: 100%;
      line-height: 2.625rem;
      text-align: center;
      font-size: 1.75rem;
    }
    &:last-child {
      line-height: 1.5rem;
      text-align: left;
      font-size: 0.875rem;
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    margin-right: 0rem;
    margin-bottom: 1.875rem;
  }
`;

const AboutUsDescriptionSection = ({ contents }) => {
  return (
    <DescriptionSectionFrame>
      <DescriptionSectionWrapper>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RightStripBg>
            <RightFirstStrip />
            <RightSecondStrip />
            <RightThirdStrip />
          </RightStripBg>
        </Box>
        <ContentParagraph title={contents.Section_2_Paragraph.title}>
          {contents.Section_2_Paragraph.content}
        </ContentParagraph>
        <div>
          <img
            src={contents.Section_2_Image?.localFile?.publicURL}
            alt={contents.Section_2_Image?.caption}
          />
        </div>
      </DescriptionSectionWrapper>
    </DescriptionSectionFrame>
  );
};

export default AboutUsDescriptionSection;

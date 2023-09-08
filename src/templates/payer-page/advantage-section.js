import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import StripBgDesign from "../../components/strip-bg-design";
import CustomGallery from "../../components/custom-gallery";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const AdvantageSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  overflow-x: hidden;
`;

const AdvantageSectionWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  overflow-x: visible;
  box-sizing: border-box;
  padding-top: 6.25rem;
  padding-bottom: 7.5rem;
  z-index: 100;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 2rem;
    padding-bottom: 4.375rem;
  }
`;

const RightStripBg = styled(StripBgDesign)`
  top: 12.185rem;
  right: -28.5rem;
  width: 28.5rem;
`;

const RightFirstStrip = styled(Box)`
  width: 19.125rem;
  height: 1.438rem;
  margin-left: 7.177rem;
  margin-bottom: 2.525rem;
  opacity: 0.7;
  background-color: ${Colors.BG_GREEN2};
`;

const RightSecondStrip = styled(Box)`
  height: 2.063rem;
  margin-bottom: 1.21rem;
  opacity: 0.8;
  background-color: ${Colors.BG_GREEN3};
`;

const RightThirdStrip = styled(Box)`
  width: 16.188rem;
  height: 1.063rem;
  margin-left: 5.363rem;
  background-color: ${Colors.THIRD};
`;

const LeftStripBg = styled(StripBgDesign)`
  bottom: 51.472rem;
  left: -22rem;
  width: 22rem;
`;

const LeftFirstStrip = styled(Box)`
  width: 9.625rem;
  height: 1.063rem;
  margin-left: 5.124rem;
  margin-bottom: 1.019rem;
  background-color: ${Colors.THIRD};
`;

const LeftSecondStrip = styled(Box)`
  height: 2.125rem;
  margin-bottom: 1.419rem;
  opacity: 0.8;
  background-color: ${Colors.SECONDARY};
`;

const LeftThirdStrip = styled(Box)`
  width: 9.625rem;
  height: 1.875rem;
  margin-left: 5.687rem;
  opacity: 0.7;
  background-color: ${Colors.BG_GREEN2};
`;

const PayerAdvantageSection = ({ contents }) => {
  return (
    <AdvantageSectionFrame>
      <AdvantageSectionWrapper>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RightStripBg>
            <RightFirstStrip />
            <RightSecondStrip />
            <RightThirdStrip />
          </RightStripBg>
          <LeftStripBg>
            <LeftFirstStrip />
            <LeftSecondStrip />
            <LeftThirdStrip />
          </LeftStripBg>
        </Box>
        <CustomGallery datas={contents.Section_3_Gallery} />
      </AdvantageSectionWrapper>
    </AdvantageSectionFrame>
  );
};

export default PayerAdvantageSection;

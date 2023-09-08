import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import StripBgDesign from "../../components/strip-bg-design";
import CustomGallery from "../../components/custom-gallery";
import { Colors } from "../../constants/share/colors";
import { ImgShadow } from "../../constants/share/common";
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
  padding-top: 7.5rem;
  padding-bottom: 9.375rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 2rem;
    padding-bottom: 4.375rem;
  }
`;

const ImgWrapper = styled(ImgShadow)`
  box-shadow: none;

  @media (max-width: ${WindowSize.mobileL}) {
    margin-left: -1rem;
  }
`;

const RightStripBg = styled(StripBgDesign)`
  top: 12.185rem;
  right: -28.5rem;
  width: 28.5rem;
`;

const FirstStrip = styled(Box)`
  width: 19.125rem;
  height: 1.438rem;
  margin-left: 7.177rem;
  margin-bottom: 2.525rem;
  opacity: 0.7;
  background-color: ${Colors.BG_GREEN2};
`;

const SecondStrip = styled(Box)`
  height: 2.063rem;
  margin-bottom: 1.21rem;
  opacity: 0.8;
  background-color: ${Colors.BG_GREEN3};
`;

const ThirdStrip = styled(Box)`
  width: 16.188rem;
  height: 1.063rem;
  margin-left: 5.363rem;
  background-color: ${Colors.THIRD};
`;

const VendorAdvantageSection = ({ contents }) => {
  const AdvantageItemImg = ({ image, alt }, index) => {
    if (index === 3) {
      return (
        <ImgWrapper>
          <LazyLoadImage
            src={image?.localFile?.publicURL}
            alt={alt}
            effect="blur"
          />
        </ImgWrapper>
      );
    } else {
      return (
        <ImgShadow>
          <LazyLoadImage
            src={image?.localFile?.publicURL}
            alt={alt}
            effect="blur"
          />
        </ImgShadow>
      );
    }
  };

  return (
    <AdvantageSectionFrame>
      <AdvantageSectionWrapper>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RightStripBg>
            <FirstStrip />
            <SecondStrip />
            <ThirdStrip />
          </RightStripBg>
        </Box>
        <CustomGallery
          datas={contents.Section_3_Gallery}
          genImg={AdvantageItemImg}
        />
      </AdvantageSectionWrapper>
    </AdvantageSectionFrame>
  );
};

export default VendorAdvantageSection;

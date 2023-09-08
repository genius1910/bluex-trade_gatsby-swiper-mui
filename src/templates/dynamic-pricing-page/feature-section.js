import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import CustomTitle from "../../components/custom-title";
import CustomGallery from "../../components/custom-gallery";
import { Colors } from "../../constants/share/colors";
import { ImgShadow } from "../../constants/share/common";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const FeatureSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(to bottom, #071e36, #001d27);
  overflow-x: hidden;
`;

const FeatureSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7.5rem;
  padding-bottom: 9.375rem;

  > div:first-child {
    width: 27.5rem;
  }
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

const DynamicPricingFeatureSection = ({ contents }) => {
  const FeatureItemImg = ({ image, alt }, index) => {
    return (
      <ImgWrapper>
        <LazyLoadImage
          src={image?.localFile?.publicURL}
          alt={alt}
          effect="blur"
        />
      </ImgWrapper>
    );
  };

  return (
    <FeatureSectionFrame>
      <FeatureSectionWrapper>
        <CustomTitle
          marginBottom="3.438rem"
          lineHeight="2rem"
          whiteSpace="prewrap"
          fontSize="1.75rem"
          fontWeight="bold"
          color={Colors.SECONDARY}
        >
          {contents.Section_2_Title}
        </CustomTitle>
        <CustomGallery
          datas={contents.Section_2_Gallery}
          genImg={FeatureItemImg}
          rightFlex={26.625}
          leftFlex={30}
          titleColor={Colors.WHITE}
          contentColor={Colors.WHITE}
          desktopGap={3}
        />
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default DynamicPricingFeatureSection;

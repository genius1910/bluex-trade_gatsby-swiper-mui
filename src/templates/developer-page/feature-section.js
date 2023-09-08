import React from "react";
import styled from "styled-components";

import { MainTitle } from "../../components/custom-title";
import CustomGallery from "../../components/custom-gallery";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const FeatureSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(to bottom, #071e36, #001d27);
  background-size: cover;
`;

const FeatureSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 62.5rem;
  box-sizing: border-box;
  padding-top: 5rem;
  padding-bottom: 7.313rem;

  > div:first-child {
    width: 37.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${WindowSize.mobileL}) {
    padding-bottom: 4.25rem;

    > div:first-child {
      width: 100%;
      white-space: pre-wrap;
    }
  }
`;

const FeatureMainSection = ({ contents }) => {
  const galleryItems = contents.Section_3_Media_List.map((media, index) => ({
    ...media,
    type: index % 2 ? "right" : "left",
  }));

  return (
    <FeatureSectionFrame>
      <FeatureSectionWrapper>
        <MainTitle>{contents.Section_3_Title}</MainTitle>
        <CustomGallery
          datas={galleryItems.map(data => {
            return {
              type: "center",
              ...data,
            };
          })}
          rightFlex={30}
          leftFlex={30}
          titleColor={Colors.WHITE}
          contentColor={Colors.WHITE}
          desktopGap={3}
        />
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default FeatureMainSection;

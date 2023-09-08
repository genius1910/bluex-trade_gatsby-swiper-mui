import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import CustomTitle, { MainTitle } from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { DefaultFont } from "../../constants/style/default-font";
import { Colors } from "../../constants/share/colors";

const FeatureSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
`;

const FeatureSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70rem;
  box-sizing: border-box;
  padding-top: 4.375rem;
  padding-bottom: 5rem;

  > div:first-child {
    width: 30rem;
    margin-bottom: 4rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    > div:first-child {
      width: 100%;
      margin-bottom: 4rem;
    }
  }
`;

const FeatureListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureItem = styled.div`
  flex: 0 1 14.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${DefaultFont}
  text-transform: uppercase;

  & + div {
    margin-right: 2rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 auto;

    & + div {
      margin-right: 0rem;
      margin-top: 2rem;
    }
  }
`;

const FeatureSection = ({ contents }) => {
  return (
    <FeatureSectionFrame>
      <FeatureSectionWrapper>
        <MainTitle>{contents.Section_2_Title}</MainTitle>
        <FeatureListWrapper>
          {contents.Section_2_Media_List.map(
            ({ image, description }, index) => (
              <FeatureItem key={`attribute-${index}`}>
                <Box height="5rem" mb="1.125rem">
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={image?.localFile?.publicURL}
                      alt={image?.caption}
                    />
                  }
                </Box>
                <CustomTitle
                  lineHeight="1.563rem"
                  whiteSpace="wrap"
                  fontFamily="Roboto-Medium, serif"
                  fontSize="1rem"
                  fontWeight="500"
                  color={Colors.SECONDARY}
                >
                  {description.title}
                </CustomTitle>
              </FeatureItem>
            )
          )}
        </FeatureListWrapper>
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default FeatureSection;

import React from "react";
import styled from "styled-components";

import Paragraph from "../../components/paragraph";
import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const ServiceIntroSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const ServiceIntroSectionWrapper = styled.div`
  ${LayoutStyle}
  width: 58.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 4rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-bottom: 1rem;
  }
`;

const TitleFrame = styled(CustomTitle)`
  text-align: center;
  line-height: 2.625rem;
  font-size: 1.75rem;
  color: ${Colors.SECONDARY};
`;

const FeatureListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  margin: 2rem -0.625rem 5rem;
  border-top: 0.063rem solid rgba(35, 163, 118, 0.5);
  padding-top: 3.125rem;
  padding-bottom: 0.813rem;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 2.875rem 0rem 5rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    margin-top: 1.625rem;
    padding-top: 0rem;
  }
`;

const FeatureItemFrame = styled.div`
  flex: 0 0 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.625rem;

  > div:first-child {
    width: 6.25rem;
    margin-bottom: 1.875rem;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    margin: 1.5rem 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 auto;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const FeatureParagraph = styled(Paragraph)`
  width: fit-content;

  > div {
    &:first-child {
      line-height: 1.75rem;
      font-size: 1.125rem;
    }
    &:last-child {
      line-height: 1.5rem;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

const ServiceIntroSection = ({ contents }) => {
  return (
    <ServiceIntroSectionFrame>
      <ServiceIntroSectionWrapper>
        <TitleFrame>{contents.Section_3_Title}</TitleFrame>
        <FeatureListWrapper>
          {contents.Section_3_Media_List.map(
            ({ image, description }, index) => (
              <FeatureItemFrame key={`step-item-${index}`}>
                <div>
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={image?.localFile?.publicURL}
                      alt={image?.caption}
                    />
                  }
                </div>
                <FeatureParagraph title={description.title}>
                  {description.content}
                </FeatureParagraph>
              </FeatureItemFrame>
            )
          )}
        </FeatureListWrapper>
        <ImageWrapper>
          <img
            src={contents.Section_3_Image?.localFile?.publicURL}
            alt={contents.Section_3_Image?.caption}
          />
        </ImageWrapper>
      </ServiceIntroSectionWrapper>
    </ServiceIntroSectionFrame>
  );
};

export default ServiceIntroSection;

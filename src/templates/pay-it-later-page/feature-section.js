import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const FeatureSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(
    to top,
    ${Colors.BLUE_LIGHT2} 0%,
    ${Colors.BLUE_LIGHT} 100%
  );
`;

const FeatureSectionWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  width: 58.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;
  padding-bottom: 7.5rem;

  > div {
    &:first-child {
      width: 100%;
      padding: 2.5rem 0rem;
    }
    &:nth-child(2) {
      line-height: 2.625rem;
      white-space: pre-wrap;
      color: ${Colors.SECONDARY};
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 3.125rem;
    padding-bottom: 3.125rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  margin: 4.375rem 0.625rem 0rem;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 2.875rem 0rem -1.5rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    margin-top: 1.625rem;
  }
`;

const FeatureItemFrame = styled.div`
  flex: 0 0 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0rem 0.625rem;

  > div {
    &:first-child {
      width: 7.5rem;
      margin-bottom: 1.875rem;

      img {
        width: 100%;
      }
    }
    &:last-child > div {
      &:first-child {
        width: 100%;
        line-height: 2rem;
        text-align: center;
        font-size: 1.375rem;
      }
      &:last-child {
        text-align: center;
      }
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

const FeatureSection = ({ contents }) => {
  return (
    <FeatureSectionFrame>
      <FeatureSectionWrapper>
        <div>
          <ReactPlayer
            className="react-player"
            url={contents.Section_1_Video?.localFile?.publicURL}
            light={
              <img
                src={contents.Section_1_Video_Thumbnail?.localFile?.publicURL}
                width="100%"
                alt="Thumbnail"
              />
            }
            width="100%"
            height="100%"
            controls={true}
            volume={1}
          />
        </div>
        <CustomTitle
          lineHeight="2.625rem"
          whiteSpace="pre-wrap"
          fontSize="1.75rem"
          color={Colors.SECONDARY}
        >
          {contents.Section_2_Title}
        </CustomTitle>
        <ContentWrapper>
          {contents.Section_2_Media_List.map(
            ({ image, description }, index) => (
              <FeatureItemFrame key={`feature-item-${index}`}>
                <div>
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={image?.localFile?.publicURL}
                      alt={image?.caption}
                    />
                  }
                </div>
                <Paragraph title={description.title}>
                  {description.content}
                </Paragraph>
              </FeatureItemFrame>
            )
          )}
        </ContentWrapper>
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default FeatureSection;

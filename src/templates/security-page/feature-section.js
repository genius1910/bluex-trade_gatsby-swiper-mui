import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { MarkDownTranslator } from "../../utils/markdown-translator";
import { Colors } from "../../constants/share/colors";
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34rem;
    height: 4.625rem;
    border-radius: 2.75rem;
    margin-bottom: 0rem;
    background-color: ${Colors.SECONDARY};
    line-height: 3.125rem;
    font-size: 2.25rem;
    color: ${Colors.WHITE};
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 2rem;
    padding-bottom: 4.375rem;

    > div:first-child {
      width: 100%;
      height: fit-content;
      font-size: 1.5rem;
    }
  }
`;

const FeatureSectionBased = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const FeatureParagraphBased = styled(Paragraph)`
  align-items: flex-start;
  width: 35.125rem;

  > div {
    &:first-child {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-style: normal;
      color: ${Colors.WHITE};
    }
    &:last-child {
      line-height: 2rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: ${Colors.WHITE};

      p {
        margin: 0;
        padding: 0;
      }
      strong {
        font-weight: 700;
      }
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    width: auto;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    margin-left: 0rem;
    margin-top: 2rem;

    > div {
      &:first-child {
        width: 100%;
        text-align: center;
      }
      &:last-child {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const MainFeatureSection = styled(FeatureSectionBased)`
  padding: 7rem 0rem 7.5rem;
  border-bottom: 0.375rem solid ${Colors.WHITE};

  > div {
    &:first-child {
      max-width: 23.5rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    padding: 3rem 0rem 3.5rem;
  }
`;

const MainFeatureParagraph = styled(FeatureParagraphBased)`
  margin-left: 4.5rem;

  @media (max-width: ${WindowSize.mobileL}) {
    margin-left: 0rem;
  }
`;

const FeatureListSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9.5rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const FeatureItemWrapper = styled(FeatureSectionBased)`
  flex-direction: ${props => props.$flexDirection};
  margin-bottom: 9.313rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;

const FeatureItemParagraph = styled(FeatureParagraphBased)`
  align-items: ${props => props.$alignItems};
  justify-content: ${props => props.$justifyContent};
  margin-left: ${props => `${props.$marginLeft}rem`};
  margin-right: ${props => `${props.$marginRight}rem`};

  > div {
    &:first-child {
      max-width: ${props => `${props.$maxWidth}rem`};
      position: relative;
      text-align: ${props => props.$textAlign};

      &:before {
        position: absolute;
        left: ${props => props.$left};
        display: flex;
        width: 0.438rem;
        height: 100%;
        background-color: ${Colors.SECONDARY};
        content: "";
      }
    }
    &:last-child {
      text-align: ${props => props.$textAlign};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;
    justify-content: center;
    margin-left: 0rem;
    margin-right: 0rem;

    > div {
      &:first-child {
        width: 100%;
        text-align: center;

        &:before {
          display: none;
        }
      }
      &:last-child {
        text-align: center;
      }
    }
  }
`;

const SecurityFeatureSection = ({ contents }) => {
  const mainFeature = contents.Section_2_Media_Markdown_List[0];

  const FeatureItemImg = ({ image, alt }) => {
    return (
      <div>
        <LazyLoadImage
          src={image?.localFile?.publicURL}
          alt={alt}
          effect="blur"
        />
      </div>
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
        <MainFeatureSection>
          <FeatureItemImg
            image={mainFeature.image}
            alt={mainFeature.image?.caption}
          />
          <MainFeatureParagraph title={mainFeature.title}>
            {MarkDownTranslator(mainFeature.content?.data?.content)}
          </MainFeatureParagraph>
        </MainFeatureSection>
        <FeatureListSection>
          {contents.Section_2_Media_Markdown_List.slice(1).map(
            (media, index) => (
              <FeatureItemWrapper
                key={`feature-item-${index}`}
                $flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <FeatureItemImg
                  image={media.image}
                  alt={media.image?.caption}
                />
                <FeatureItemParagraph
                  title={media.title}
                  $left={index % 2 === 0 ? "-1.5rem" : "calc(100% + 1.5rem)"}
                  $alignItems={index % 2 === 0 ? "flex-start" : "flex-end"}
                  $justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
                  $marginLeft={index % 2 === 0 ? 6 : 0}
                  $marginRight={index % 2 === 0 ? 0 : 6}
                  $maxWidth={index % 2 === 0 ? 28 : 16}
                  $textAlign={index % 2 === 0 ? "left" : "right"}
                >
                  {MarkDownTranslator(media.content?.data?.content)}
                </FeatureItemParagraph>
              </FeatureItemWrapper>
            )
          )}
        </FeatureListSection>
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default SecurityFeatureSection;

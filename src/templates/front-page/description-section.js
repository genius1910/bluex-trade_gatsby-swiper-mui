import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { ComponentPartialString } from "../../utils/component-partial-string";
import CustomButton from "../../components/custom-button";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const DescriptionSectionFrame = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.SECONDARY};
`;

const DescriptionSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 8.875rem;
  padding-bottom: 5.688rem;

  > div:last-child {
    flex: 1 1 33.75rem;
    img {
      width: 100%;
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 3.75rem;
    padding-bottom: 3.157rem;

    > div:last-child {
      flex: 1 1 50%;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-wrap: wrap;

    > div:last-child {
      flex: 1 1 100%;
    }
  }
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5rem;
  margin-right: 7.5rem;
  line-height: 1.5rem;
  font-size: 1.125rem;
  color: ${Colors.WHITE};

  > a:last-child {
    width: 10rem;

    button {
      width: 100%;
      background-color: ${Colors.WHITE};
      color: ${Colors.SECONDARY};
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    margin-right: 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 1.875rem;

  > div {
    &:first-child {
      margin-bottom: 0.188rem;
      font-weight: 800;
    }
    &:last-child {
      font-weight: 400;
    }
  }
`;

const TitleWrapper = styled.div`
  line-height: 3rem;
  font-family: lato;
  font-size: 2.25rem;
  font-weight: 700;
`;

const StyledTitleWrapper = styled.span`
  padding-right: 0.5rem;
  font-weight: 800;
  font-style: italic;
`;

const FeatureList = styled.div`
  margin-bottom: 1.875rem;
  line-height: 1.875rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

const DescriptionSection = ({ contents }) => {
  const StyledTitleGenerator = () => {
    return (
      <StyledTitleWrapper>
        {contents.Section_3_Title_Styled_Keyword}
      </StyledTitleWrapper>
    );
  };

  return (
    <DescriptionSectionFrame>
      <DescriptionSectionWrapper>
        <ContentFrame>
          <ParagraphWrapper>
            <div>{contents.Section_3_Type}</div>
            <TitleWrapper>
              {ComponentPartialString(
                contents.Section_3_Title,
                contents.Section_3_Title_Styled_Keyword,
                StyledTitleGenerator
              )}
            </TitleWrapper>
            <div>{contents.Section_3_Content}</div>
          </ParagraphWrapper>
          <FeatureList>
            {contents.Section_3_Feature_List.map(({ content }, index) => (
              <div key={`feature-item-${index}`}>{content}</div>
            ))}
          </FeatureList>
          <Link to={contents.Section_3_Button?.link}>
            <CustomButton>{contents.Section_3_Button?.text}</CustomButton>
          </Link>
        </ContentFrame>
        <div>
          <LazyLoadImage
            src={contents.Section_3_Image?.localFile?.publicURL}
            alt={contents.Section_3_Image?.caption}
            effect="blur"
          />
        </div>
      </DescriptionSectionWrapper>
    </DescriptionSectionFrame>
  );
};

export default DescriptionSection;

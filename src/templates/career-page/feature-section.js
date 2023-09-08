import React from "react";
import styled from "styled-components";

import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const FeatureSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.SECONDARY};
  background-position: center;
  background-size: cover;
`;

const FeatureSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;

  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

const FeatureItems = styled.div`
  flex: 0 1 21.313rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.125rem 0rem;

  > div:first-child {
    margin-bottom: 1.25rem;
  }
`;

const ItemParagraph = styled(Paragraph)`
  margin-bottom: 1.875rem;
  align-items: flex-start;

  > div {
    color: ${Colors.WHITE};

    &:first-child {
      width: 100%;
      margin-bottom: 0.75rem;
      text-align: center;
      line-height: 1.875rem;
      font-size: 2rem;
      font-weight: 800;
    }
    &:last-child {
      text-align: center;
      line-height: 1.875rem;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;

    > div:last-child {
      width: 100%;
      text-align: center;
    }
  }
`;

const FeatureSection = ({ contents }) => {
  return (
    <FeatureSectionFrame>
      <FeatureSectionWrapper>
        {contents.Section_3_Media_List.map(({ image, description }, index) => (
          <FeatureItems key={`feature-item-${index}`}>
            <div>
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={image?.localFile?.publicURL} alt={image?.caption} />
              }
            </div>
            <ItemParagraph title={description?.title}>
              {description?.content}
            </ItemParagraph>
          </FeatureItems>
        ))}
      </FeatureSectionWrapper>
    </FeatureSectionFrame>
  );
};

export default FeatureSection;

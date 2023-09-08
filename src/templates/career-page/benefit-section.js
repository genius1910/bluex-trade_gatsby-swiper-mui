import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const BenefitSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const BenefitSectionWrapper = styled.div`
  ${LayoutStyle}
  width: 70rem;
  padding-top: 6.375rem;
  padding-bottom: 4.5rem;

  > div:first-child {
    margin-bottom: 4.875rem;
  }
  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    > div:first-child {
      margin-bottom: 1.5rem;
    }
  }
`;

const FeatureListFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureItems = styled.div`
  flex: 0 0 14.688rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.813rem 1.25rem;
  padding: 1.875rem 1.875rem 1.25rem;
  box-sizing: border-box;
  border-radius: 2.125rem;
  box-shadow: 5px 4px 9px 4px rgba(0, 0, 0, 0.05);

  > div:first-child {
    margin-bottom: 0.938rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin: 0.75rem auto;
  }
`;

const ItemParagraph = styled(Paragraph)`
  align-items: center;

  > div {
    color: ${Colors.SECONDARY};

    &:first-child {
      margin-bottom: 0rem;
      text-align: center;
      line-height: 1.5rem;
      font-size: 1.125rem;
      font-weight: 700;
    }
    &:last-child {
      text-align: center;
      line-height: 1.5rem;
      font-size: 1rem;
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

const BenefitSection = ({ contents }) => {
  return (
    <BenefitSectionFrame>
      <BenefitSectionWrapper>
        <CustomTitle
          lineHeight="4.313rem"
          fontSize="40px"
          color={Colors.SECONDARY}
        >
          {contents.Section_4_Title}
        </CustomTitle>
        <FeatureListFrame>
          {contents.Section_4_Media_List.map(
            ({ image, description }, index) => (
              <FeatureItems key={`benefit-item-${index}`}>
                <div>
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={image?.localFile?.publicURL}
                      alt={image?.caption}
                    />
                  }
                </div>
                <ItemParagraph title={description?.title}>
                  {description?.content}
                </ItemParagraph>
              </FeatureItems>
            )
          )}
        </FeatureListFrame>
      </BenefitSectionWrapper>
    </BenefitSectionFrame>
  );
};

export default BenefitSection;

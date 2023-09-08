import React from "react";
import styled from "styled-components";

import { MainTitle } from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const StepsSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.PRIMARY};
`;

const StepsSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.438rem;
  padding-bottom: 7.375rem;

  > div:first-child {
    margin-bottom: 4.188rem;
    line-height: 4.375rem;
    font-size: 3.125rem;
    color: ${Colors.WHITE};
  }

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    align-items: center;
  }
`;

const StepsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepsItemFrame = styled.div`
  display: flex;
  flex-direction: row;
  width: 35.25rem;
  padding: 2.5rem 1.75rem 2.188rem 2.75rem;
  margin-bottom: 3.125rem;
  border-radius: 2.125rem;
  background-color: ${Colors.WHITE};

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const StepHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.563rem;

  > div {
    &:first-child {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${Colors.SECONDARY};
    }
    &:last-child {
      font-size: 2.25rem;
      font-weight: 800;
      color: ${Colors.PRIMARY};
    }
  }
`;

const StepParagraph = styled(Paragraph)`
  align-items: flex-start;
  margin-top: -0.425rem;

  > div {
    &:first-child {
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${Colors.SECONDARY};
    }
    &:last-child {
      font-size: 1.063rem;
      font-weight: 700;
      color: ${Colors.PRIMARY};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    margin-top: 0rem;
  }
`;

const PointerDivision = styled.div`
  position: relative;
  width: 0.438rem;
  height: 4rem;
  background-color: ${Colors.SECONDARY};

  &:before {
    position: absolute;
    top: -0.75rem;
    left: -0.813rem;
    content: "";
    width: 2.063rem;
    height: 2.063rem;
    border-radius: 50%;
    background-color: ${Colors.SECONDARY};
  }
`;

const ExampleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 53.188rem;
  padding: 2.063rem 3.313rem 2.813rem;
  border-radius: 2.125rem;
  background-color: ${Colors.SECONDARY};

  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;

const ExampleParagraph = styled(Paragraph)`
  width: 37.813rem;
  margin-bottom: 1.188rem;

  > div {
    &:first-child {
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${Colors.WHITE};
    }
    &:last-child {
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${Colors.WHITE};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const PriceListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  padding: 1rem 1.75rem 1.5rem;
  border-radius: 0.938rem;
  background-color: ${Colors.WHITE};

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 1.75rem 0.5rem;
  }
`;

const PriceItemFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    &:first-child {
      font-size: 0.813rem;
      font-weight: 500;
      color: ${Colors.PRIMARY};
    }
    &:last-child {
      font-size: 1.875rem;
      font-weight: 700;
      color: ${Colors.SECONDARY};
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    margin-bottom: 0.5rem;
  }
`;

const StepsSection = ({ contents }) => {
  return (
    <StepsSectionFrame>
      <StepsSectionWrapper>
        <MainTitle>{contents.Section_3_Title}</MainTitle>
        <StepsListWrapper>
          {contents.Section_3_Steps_Detail.map((step, index) => (
            <StepsItemFrame key={`step-detail-${index}`}>
              <StepHeader>
                <div>{contents.Section_3_Step_Text}</div>
                <div>{`0${index + 1}`}</div>
              </StepHeader>
              <StepParagraph title={step.title}>{step.content}</StepParagraph>
            </StepsItemFrame>
          ))}
        </StepsListWrapper>
        <PointerDivision />
        <ExampleSection>
          <ExampleParagraph title={contents.Section_3_Paragraph.title}>
            {contents.Section_3_Paragraph.content}
          </ExampleParagraph>
          <PriceListWrapper>
            {contents.Section_3_Price_List.map((price, index) => (
              <PriceItemFrame key={`price-item-${index}`}>
                <div>{price.name}</div>
                <div>{price.price}</div>
              </PriceItemFrame>
            ))}
          </PriceListWrapper>
        </ExampleSection>
      </StepsSectionWrapper>
    </StepsSectionFrame>
  );
};

export default StepsSection;

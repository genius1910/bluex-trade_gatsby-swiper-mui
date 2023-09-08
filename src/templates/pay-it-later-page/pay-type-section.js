import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { MarkDownTranslator } from "../../utils/markdown-translator";
import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

const PayTypeSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const PayTypeSectionWrapper = styled.div`
  ${LayoutStyle}
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 4rem;
`;

const TitleFrame = styled(CustomTitle)`
  width: 43rem;
  text-align: center;
  line-height: 2.625rem;
  white-space: normal;
  font-size: 1.75rem;
  color: ${Colors.SECONDARY};

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const IntroductionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 1.438rem;
  margin-bottom: 2.813rem;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: column;
    margin-bottom: 0rem;
  }
`;

const IntroductionItemFrame = styled.div`
  flex: 1 1 50%;
  display: flex;

  &:first-child {
    justify-content: flex-end;
    background-color: ${Colors.GRAY12};
  }
  &:last-child {
    background-color: ${Colors.BLUE_LIGHT6};
  }
`;

const IntroductionItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.25rem;
  padding: 5.375rem 6.5rem 8rem;
  ${DefaultFont}
  color: ${Colors.PRIMARY};

  > div {
    &:first-child {
      line-height: 3rem;
      font-size: 1.75rem;
      color: ${Colors.PRIMARY};
    }
    &:nth-child(2) {
      line-height: 1.313rem;
      font-size: 1rem;
      font-weight: 600;

      > p {
        text-align: center;
        font-weight: 800;
      }
    }
  }
  > button {
    position: absolute;
    bottom: 5rem;
    border-radius: 0.25rem;
    margin-top: 2.5rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    flex: 1 1 auto;
    padding: 2.5rem 1.25rem 3rem;

    & + & {
      margin-left: 0rem;
      margin-top: 2rem;
    }
    > button {
      position: relative;
      bottom: auto;
    }
  }
`;

const PayTypeSection = ({ contents }) => {
  return (
    <PayTypeSectionFrame>
      <PayTypeSectionWrapper>
        <TitleFrame>{contents.Section_3_Service_Intro_Title}</TitleFrame>
        <IntroductionListWrapper>
          {contents.Section_3_Service_Intro_List.map(
            ({ title, content, button }, index) => (
              <IntroductionItemFrame key={`service-intro-${index}`}>
                <IntroductionItem>
                  <CustomTitle color={Colors.WHITE}>{title}</CustomTitle>
                  <div>{MarkDownTranslator(content.data.content)}</div>
                  <CustomButton
                    padding="0.5rem 2rem"
                    lineHeight="1.5rem"
                    fontSize="1.25rem"
                    onClick={() => NavigateNewTab(button.link)}
                  >
                    {button.text}
                  </CustomButton>
                </IntroductionItem>
              </IntroductionItemFrame>
            )
          )}
        </IntroductionListWrapper>
      </PayTypeSectionWrapper>
    </PayTypeSectionFrame>
  );
};

export default PayTypeSection;

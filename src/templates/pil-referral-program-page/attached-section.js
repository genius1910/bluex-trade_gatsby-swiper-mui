import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

import IconNextArrow from "../../images/icon/icon-next-arrow.inline.svg";

const AttachedSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const AttachedSectionWrapper = styled.div`
  ${LayoutStyle}
  position: absolute;
  top: -5rem;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 64rem;
  padding: 1.375rem 5.313rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.188rem;
  background-color: ${Colors.SECONDARY};

  > button {
    flex: 0 0 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13rem;
    padding: 0.625rem;
    background-color: ${Colors.WHITE};
    color: ${Colors.SECONDARY};

    > span {
      margin-right: 0.688rem;
    }
    &:hover {
      color: ${Colors.WHITE};

      svg {
        color: ${Colors.WHITE};
      }
    }
  }
  @media (max-width: 1350px) {
    width: 100%;
  }
  @media (max-width: 1140px) {
    position: relative;
    top: unset;
    border-radius: unset;
    padding: 1.25rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;

    > button {
      flex: 1 1 auto;
      margin-top: 1.5rem;
    }
  }
`;

const AttachedContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4.688rem;
  color: ${Colors.WHITE};

  @media (max-width: 1140px) {
    margin-right: 1.5rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin-right: 0rem;
  }
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  > div {
    &:first-child {
      margin-right: 1rem;
      font-weight: 800;
      font-size: 1.875rem;
      color: ${Colors.WHITE};
    }
    &:last-child {
      font-size: 1.063rem;
      font-weight: 800;
      color: ${Colors.YELLOW2};
    }
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: flex-start;

    > div:first-child {
      margin-right: 0rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const AttachedSection = ({ contents }) => (
  <AttachedSectionFrame>
    <AttachedSectionWrapper>
      <AttachedContentFrame>
        <TitleFrame>
          <CustomTitle>{contents.Section_1_Attached_Title}</CustomTitle>
          <CustomTitle>{contents.Section_1_Attached_Sub_Title}</CustomTitle>
        </TitleFrame>
        <div>{contents.Section_1_Attached_Content}</div>
      </AttachedContentFrame>
      <CustomButton
        width="9.063rem"
        fontSize="0.875rem"
        lineHeight="1.5rem"
        onClick={() => NavigateNewTab(contents.Section_1_Attached_Button?.link)}
      >
        <span>{contents.Section_1_Attached_Button?.text}</span>
        <IconNextArrow />
      </CustomButton>
    </AttachedSectionWrapper>
  </AttachedSectionFrame>
);

export default AttachedSection;

import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { MarkDownTranslator } from "../../utils/markdown-translator";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const ContactSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(
    to left,
    ${Colors.BLUE_GREEN4} 0%,
    ${Colors.BLUE_GREEN5} 100%
  );
  background-size: cover;
  background-position: center;
`;

const ContactSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 3.125rem;
  padding-bottom: 2.75rem;

  > * {
    margin-bottom: 1.25rem;
  }
  > div {
    text-align: center;
    color: ${Colors.WHITE};

    &:last-child {
      width: 31.5rem;
      font-family: lato;
      font-size: 1rem;

      p {
        padding: 0rem;
      }
      a {
        color: ${Colors.WHITE};
        text-decoration: underline;
      }
    }
  }

  @media (max-width: ${WindowSize.mobileL}) {
    padding-bottom: 4rem;

    > div:last-child {
      width: 100%;
    }
  }
`;

const ContactSection = ({ contents }) => {
  return (
    <ContactSectionFrame>
      <ContactSectionWrapper>
        <div>
          <img
            src={contents.Section_6_Image?.localFile?.publicURL}
            alt={contents.Section_6_Image?.caption}
          />
        </div>
        <CustomTitle
          lineHeight="2.625rem"
          whiteSpace="pre-wrap"
          fontSize="1.75rem"
        >
          {contents.Section_6_Title}
        </CustomTitle>
        <CustomButton
          padding="0.375rem 2rem"
          lineHeight="1.5rem"
          fontSize="0.875rem"
          onClick={() => NavigateNewTab(contents.Section_6_Link_Button.link)}
        >
          {contents.Section_6_Link_Button.text}
        </CustomButton>
        <div>
          {MarkDownTranslator(
            contents.Section_6_Content.data.Section_6_Content
          )}
        </div>
      </ContactSectionWrapper>
    </ContactSectionFrame>
  );
};

export default ContactSection;

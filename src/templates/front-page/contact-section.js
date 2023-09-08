import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const ContactSectionFrame = styled.div`
  position: relative;
  overflow: hidden;

  > span:first-child {
    width: 100%;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: -10;

    img {
      width: 100%;
    }
    @media (max-width: ${WindowSize.laptopS}) {
      width: 140%;
    }
    @media (max-width: ${WindowSize.mobileL}) {
      width: 250%;
    }
  }
`;

const ContactSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 5.063rem;
  padding-bottom: 5.688rem;

  > div:first-child {
    max-width: 34rem;

    .strong {
      font-weight: 800;
    }
  }
  > button {
    min-width: 10rem;
    padding: 1rem 2rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 2.563rem;
    padding-bottom: 4.375rem;
  }
`;

const ContactSection = ({ title, linkButton, bg }) => {
  return (
    <ContactSectionFrame>
      <LazyLoadImage
        src={bg?.localFile?.publicURL}
        alt="front-contact-bg"
        effect="blur"
      />
      <ContactSectionWrapper>
        <CustomTitle
          marginBottom="1.625rem"
          lineHeight="2.75rem"
          whiteSpace="prewrap"
          fontSize="2.25rem"
          fontWeight="500"
          color={Colors.WHITE}
        >
          {MarkDownTranslator(title)}
        </CustomTitle>
        <CustomButton
          borderRadius="31.5rem"
          lineHeight="1.5rem"
          fontSize="1.375rem"
          onClick={() => NavigateNewTab(linkButton.link)}
        >
          {linkButton.text}
        </CustomButton>
      </ContactSectionWrapper>
    </ContactSectionFrame>
  );
};

export default ContactSection;

import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const ContactSectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-position: center;
`;

const ContactSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 70rem;
  padding-top: 6.188rem;
  padding-bottom: 7.25rem;

  > div:first-child {
    max-width: 49.875rem;

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

const ContactSection = ({ contents }) => {
  return (
    <ContactSectionFrame $url={contents.Section_3_Bg?.localFile?.publicURL}>
      <ContactSectionWrapper>
        <CustomTitle
          marginBottom="2.688rem"
          lineHeight="2.75rem"
          whiteSpace="prewrap"
          fontSize="1.75rem"
          fontWeight="bold"
          color={Colors.WHITE}
        >
          {contents.Section_3_Title}
        </CustomTitle>
      </ContactSectionWrapper>
    </ContactSectionFrame>
  );
};

export default ContactSection;

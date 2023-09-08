import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

import StripBgDesign from "../../components/strip-bg-design";
import { MarkDownTranslator } from "../../utils/markdown-translator";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import CustomTitle from "../../components/custom-title";

import IconFoldOff from "../../images/icon/icon-fold-off.inline.svg";
import IconFoldOn from "../../images/icon/icon-fold-on.inline.svg";

const FAQSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  overflow-x: hidden;
`;

const FAQSectionWrapper = styled.div`
  ${LayoutStyle}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72rem;
  overflow-x: visible;
  box-sizing: border-box;
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 58.75rem;

  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
  }
`;

const FAQItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const FAQTab = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${Colors.BLUE_LIGHT5};
  padding: 0.75rem 1.25rem 0.75rem 2.5rem;
  background-color: ${Colors.WHITE};
  line-height: 3rem;
  text-align: left;
  font-size: ${props => props.$fontSize};
  font-weight: 700;
  color: ${Colors.PRIMARY};

  &:focus-visible {
    outline: none;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    font-size: 1rem;
  }
`;

const FAQContent = styled.div`
  width: 100%;
  max-height: 0rem;
  box-sizing: border-box;
  transition: max-height 0.5s ease-out;
  background-color: ${Colors.BG_BLUE_LIGHT7};
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.PRIMARY};

  &.fold-off {
    max-height: 30rem;
  }
  p {
    margin-inline-start: 2.5rem;
    margin-inline-end: 5.625rem;
  }
  img {
    width: 75%;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    p {
      margin-inline-end: 2.5rem;
    }
    img {
      width: 100%;
    }
  }
`;

const RightStripBg = styled(StripBgDesign)`
  top: 5rem;
  right: -25.313rem;
  width: 31.313rem;
`;

const RightSecondStrip = styled(Box)`
  height: 2.125rem;
  margin-bottom: 0.563rem;
  opacity: 0.6;
  background-color: ${Colors.SECONDARY};
`;

const RightThirdStrip = styled(Box)`
  width: 16.188rem;
  height: 1.063rem;
  margin-left: 8.25rem;
  background-color: ${Colors.BG_GREEN6};
`;

const FAQSection = ({ title, faqs }) => {
  const [switcher, setSwitcher] = useState(faqs.map(() => false));
  const theme = useTheme();
  const isNotMobileDevice = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <FAQSectionFrame>
      <FAQSectionWrapper>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RightStripBg>
            <RightSecondStrip />
            <RightThirdStrip />
          </RightStripBg>
        </Box>
        <CustomTitle
          marginBottom="3.75rem"
          lineHeight="3rem"
          whiteSpace="prewrap"
          fontSize="2.25rem"
        >
          {title}
        </CustomTitle>
        <FAQList>
          {faqs.map(({ title, titleSize, content }, index) => (
            <FAQItem key={`faq-item-${index}`}>
              <FAQTab
                $fontSize={`${titleSize}px`}
                onClick={() => {
                  setSwitcher(
                    switcher.map((item, idx) => (idx === index ? !item : item))
                  );
                }}
              >
                {title}
                {isNotMobileDevice &&
                  (switcher[index] ? <IconFoldOff /> : <IconFoldOn />)}
              </FAQTab>
              <FAQContent
                className={
                  (!isNotMobileDevice || switcher[index]) && "fold-off"
                }
              >
                {MarkDownTranslator(content?.data?.content)}
              </FAQContent>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSectionWrapper>
    </FAQSectionFrame>
  );
};

export default FAQSection;

import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

import IconComma from "../../images/icon/icon-quote-up.inline.svg";

const TestimonialSectionFrame = styled.div`
  position: relative;
  background-color: ${Colors.BG_BLUE_LIGHT5};
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
`;

const TestimonialSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 7.5rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-bottom: 5.625rem;
  }
`;

const TestimonialList = styled.div`
  display: flex;
  margin: 0rem -0.625rem;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: ${WindowSize.laptopS}) {
    flex-wrap: wrap;
    margin: -0.625rem 0rem;
  }
`;

const TestimonialItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 28.75rem;
  padding: 4.25rem 2.5rem 1.875rem;
  margin: 0rem 0.625rem;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${Colors.WHITE};
  box-shadow: 0 2px 20px 0 rgba(0, 21, 73, 0.1);

  svg {
    position: absolute;
    top: 1.75rem;
    left: 2.563rem;
    height: 1.188rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    ${DefaultFont}
    line-height: 1.5rem;
    font-style: italic;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    width: 100%;
    height: fit-content;
    margin: 0.625rem 0rem;
    padding: 4.25rem 1.25rem 1.25rem;

    svg {
      left: 1.313rem;
    }
  }
`;

const SpeakerInfoWrapper = styled.div`
  margin-top: 2.125rem;
  font-style: normal;

  @media (max-width: ${WindowSize.mobileL}) {
    margin-top: 1.875rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.875rem;
  margin-top: 1.313rem;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

const TestimonialSection = ({ contents }) => {
  return (
    <TestimonialSectionFrame>
      <TestimonialSectionWrapper>
        <CustomTitle
          lineHeight="2.625rem"
          whiteSpace="pre-wrap"
          fontSize="1.75rem"
          color={Colors.SECONDARY}
          marginBottom="3.125rem"
        >
          {contents.Section_5_Title}
        </CustomTitle>
        <TestimonialList>
          {contents.Section_5_Testimonial_List.map(
            ({ content, logo, speaker, title }, index) => (
              <TestimonialItem key={`testimonial-item-${index}`}>
                <div>
                  <IconComma />
                  <div>{content}</div>
                  <SpeakerInfoWrapper>
                    <CustomTitle
                      textAlign="right"
                      lineHeight="2rem"
                      fontSize="1.125rem"
                    >
                      {speaker}
                    </CustomTitle>
                    <div>{title}</div>
                  </SpeakerInfoWrapper>
                </div>
                <LogoWrapper>
                  <img src={logo?.localFile?.publicURL} alt={logo?.caption} />
                </LogoWrapper>
              </TestimonialItem>
            )
          )}
        </TestimonialList>
      </TestimonialSectionWrapper>
    </TestimonialSectionFrame>
  );
};

export default TestimonialSection;

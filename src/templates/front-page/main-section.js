import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import parse from "html-react-parser";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
// import { NavigateNewTab } from "../header";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

// import BackgroundVideo from "../../images/front-main/BlueX Page animated background.mp4";

const MainSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  overflow: hidden;

  &::before {
    position: absolute;
    display: block;
    width: 100%;
    height: 6.313rem;
    z-index: 10;
    background: linear-gradient(
      180deg,
      ${Colors.PRIMARY} 0%,
      rgba(24, 51, 94, 0) 100%
    );
    content: "";
  }
`;

const BgVideoFrame = styled.video`
  position: relative;
  width: 100vw;
  margin-bottom: -0.5rem;

  @media (max-width: ${WindowSize.laptopS}) {
    width: auto;
    height: 41.75rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    height: 47.5rem;
  }
`;

const MainSectionWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0rem;
  width: 100%;
  height: 100%;
  background: rgba(24, 51, 94, 0.5);
`;

const MainSectionContent = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;
  overflow-x: visible;
  box-sizing: border-box;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-right: 6.25rem;

  @media (max-width: ${WindowSize.laptopS}) {
    margin-right: 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const Title = styled(CustomTitle)`
  width: 36rem;
  margin-bottom: 1.375rem;
  z-index: 20;
  line-height: 3rem;
  color: ${Colors.WHITE};

  & > span {
    color: ${Colors.SECONDARY};
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const ImgRelativeFrame = styled.div`
  position: relative;
  overflow: visible;
  height: 24rem;

  @media (max-width: ${WindowSize.laptopS}) {
    display: none;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    height: 17rem;
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: -5rem;

  img {
    height: 25rem;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    top: 0rem;
    left: 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    img {
      height: 17.5rem;
    }
  }
`;

const FrontMainSection = ({ contents, btnCallback }) => {
  return (
    <MainSectionFrame id="MainSection">
      <BgVideoFrame
        id="BGMainVideo"
        autoPlay={"autoplay"}
        preLoad="auto"
        muted
        loop
      >
        <source
          src={contents.Section_1_Image?.localFile?.publicURL}
          type="video/mp4"
        />
        <a
          href={contents.Section_1_Image_Preview?.localFile?.publicURL}
          aria-label="Background_Video_Preview"
        >
          {" "}
        </a>
      </BgVideoFrame>
      <MainSectionWrapper>
        <MainSectionContent>
          <TitleWrapper>
            <Title fontSize="3.125rem" whiteSpace="pre-wrap" textAlign="left">
              {parse(contents.Section_1_Title)}
            </Title>
            <Box mb="2.625rem">
              <CustomTitle
                textAlign="left"
                lineHeight="1.5rem"
                whiteSpace="pre-wrap"
                color={Colors.WHITE}
                fontSize="1rem"
                fontWeight="normal"
              >
                {contents.Section_1_Content}
              </CustomTitle>
            </Box>
            <CustomButton
              width="9.063rem"
              fontSize="0.875rem"
              lineHeight="1.5rem"
              onClick={() => btnCallback(true)}
            >
              {contents.Section_1_Button.text}
            </CustomButton>
          </TitleWrapper>
          <ImgRelativeFrame>
            <ImgWrapper />
          </ImgRelativeFrame>
        </MainSectionContent>
      </MainSectionWrapper>
    </MainSectionFrame>
  );
};

export default FrontMainSection;

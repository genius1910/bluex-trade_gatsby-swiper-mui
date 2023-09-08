import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { NavigateNewTab } from "../header";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const ReadyStartFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(to left, #2c78b5, #238691);
`;

const ReadyStartWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.125rem;
  padding-bottom: 3.75rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const ReadyStart = ({ contents }) => (
  <ReadyStartFrame>
    <ReadyStartWrapper>
      <Box mb="1.25rem">
        <img
          src={contents.img?.localFile?.publicURL}
          alt={contents.img?.caption}
        />
      </Box>
      <CustomTitle
        lineHeight="2.625rem"
        fontSize="1.5rem"
        whiteSpace="pre-wrap"
        color={Colors.WHITE}
      >
        {contents.title}
      </CustomTitle>
      <Box mt="1.25rem">
        <CustomButton
          padding="0.375rem 2.063rem"
          lineHeight="1.5rem"
          fontSize="0.875rem"
          onClick={() => NavigateNewTab(contents.btn.link)}
        >
          {contents.btn.text}
        </CustomButton>
      </Box>
    </ReadyStartWrapper>
  </ReadyStartFrame>
);

export default ReadyStart;

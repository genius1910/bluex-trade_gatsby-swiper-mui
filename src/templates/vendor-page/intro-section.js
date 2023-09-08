import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";

import CustomTitle from "../../components/custom-title";
import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const IntroSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(to top, #fffefe, #e9fcf4);
`;

const IntroSectionWrapper = styled.div`
  ${LayoutStyle}
  padding-top: 5rem;
  padding-bottom: 2.75rem;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;

const IntroListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const IntroItem = styled.div`
  flex: 0 1 23.75rem;
  display: flex;
  flex-direction: column;
`;

const paragraphTitleStyle = {
  lineHeight: "2.25rem",
  textAlign: "center",
};

const paragraphContentStyle = {
  textAlign: "center",
  fontSize: "0.875rem",
};

const VendorIntroSection = ({ contents }) => {
  return (
    <IntroSectionFrame>
      <IntroSectionWrapper>
        <Box mb="2.5rem">
          <CustomTitle>{contents.Section_2_Title}</CustomTitle>
        </Box>
        <IntroListWrapper>
          {contents.Section_2_Media_List.map(
            ({ image, description }, index) => (
              <IntroItem key={`intro-item-${index}`}>
                <Box textAlign="center" mb="1.25rem">
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={image?.localFile?.publicURL}
                      alt={image?.caption}
                    />
                  }
                </Box>
                <Paragraph
                  title={description.title}
                  titleClass={paragraphTitleStyle}
                  contentClass={paragraphContentStyle}
                  gap="0.625rem"
                >
                  {description.content}
                </Paragraph>
              </IntroItem>
            )
          )}
        </IntroListWrapper>
      </IntroSectionWrapper>
    </IntroSectionFrame>
  );
};

export default VendorIntroSection;

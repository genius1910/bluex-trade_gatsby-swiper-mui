import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import parse from "html-react-parser";

import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

const SecuritySectionFrame = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  width: 100%;
  height: fit-content;
  background-size: cover;
`;

const MainSectionWrapper = styled.div`
  ${LayoutStyle}
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4.375rem;
  padding-bottom: 5.875rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const SecurityItem = styled.div`
  flex: 0 1 23.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 auto;
  }
`;

const ItemParagraph = styled(Paragraph)`
  > div:first-child > span {
    font-size: 1.25rem;
  }
`;

const paragraphTitleStyle = {
  lineHeight: "normal",
  textAlign: "center",
  fontSize: "1.75rem",
};

const VendorSecuritySection = ({ contents }) => {
  return (
    <SecuritySectionFrame $url={contents.Section_4_Bg.localFile.publicURL}>
      <MainSectionWrapper>
        {contents.Section_4_Media_List.map(({ image, description }, index) => (
          <SecurityItem key={`security-item-${index}`}>
            <Box textAlign="center">
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={image?.localFile?.publicURL} alt={image?.caption} />
              }
            </Box>
            <ItemParagraph
              title={parse(description.title)}
              titleClass={paragraphTitleStyle}
              contentTextAlign="center"
              gap="1.25rem"
            >
              {description.content}
            </ItemParagraph>
          </SecurityItem>
        ))}
      </MainSectionWrapper>
    </SecuritySectionFrame>
  );
};

export default VendorSecuritySection;

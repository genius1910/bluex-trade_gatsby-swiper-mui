import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Paragraph from "../../components/paragraph";
import CustomTabs from "../../components/custom-tabs";
import CustomButton from "../../components/custom-button";
import { LayoutStyle } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const HeaderSectionFrame = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-position: center;
`;

const HeaderSectionWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.$url});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 8.25rem 1.25rem 5rem;
`;

const HeaderActionBar = styled(Box)`
  ${LayoutStyle}
  position: relative;
  margin-top: 1.5rem;
`;

const MobileWrapper = styled.div`
  display: flex;

  > button {
    width: 12.5rem;
    background-color: transparent;
    text-align: left;
    font-size: 1.25rem;
    color: ${Colors.SECONDARY};

    &:hover {
      background-color: transparent;
    }
  }
`;

const paragraphTitleStyle = {
  lineHeight: "3.375rem",
  color: Colors.WHITE,
  fontSize: "2.25rem",
};

const PressHeaderSection = ({ contents, tabIndex, mobileIndex, setTopRef }) => {
  const theme = useTheme();
  const isNotMobileDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const tapItems = contents.Press_Tab_Type.map(({ text }) =>
    text.replace("_", " ")
  ).map(item => ({ tag: item }));
  const topRef = useRef();

  useEffect(() => {
    if (typeof setTopRef === "function") {
      setTopRef(topRef);
    }
  }, [topRef, setTopRef]);

  const changeTabIndex = newTabIndex => {
    navigate(`${contents.Press_Tab_Type[newTabIndex].link}`);
  };

  return (
    <HeaderSectionFrame ref={topRef}>
      <HeaderSectionWrapper $url={contents.Section_1_Bg?.localFile?.publicURL}>
        <Paragraph
          title={contents.Section_1_Paragraph.title}
          titleClass={paragraphTitleStyle}
          contentColor={Colors.WHITE}
          contentTextAlign="center"
          gap="0.625rem"
        >
          {contents.Section_1_Paragraph.content}
        </Paragraph>
      </HeaderSectionWrapper>
      <HeaderActionBar>
        {isNotMobileDevice ? (
          <>
            <Box sx={{ display: { sm: "none", md: "block" } }}>
              <CustomTabs
                tabItems={tapItems}
                tabIndex={tabIndex}
                changeTabIndex={changeTabIndex}
                underlineStyle={{
                  backgroundColor: Colors.BLUE3,
                  height: "0.2rem",
                }}
                tagProperty={{
                  width: "50%",
                  selectColor: Colors.BLUE3,
                  color: Colors.PRIMARY,
                  lineHeight: "330%",
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  fontWeight: "400",
                }}
                tabsListStyle={{ justifyContent: "space-between" }}
              />
            </Box>
            <Divider />
          </>
        ) : (
          <MobileWrapper>
            <CustomButton
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => changeTabIndex(mobileIndex)}
            >
              {`>> ${contents.Press_Tab_Type[mobileIndex].text}`}
            </CustomButton>
          </MobileWrapper>
        )}
      </HeaderActionBar>
    </HeaderSectionFrame>
  );
};

export default PressHeaderSection;

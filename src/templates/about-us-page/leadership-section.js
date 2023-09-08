import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import StripBgDesign from "../../components/strip-bg-design";
import Paragraph from "../../components/paragraph";
import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const LeadershipSectionFrame = styled.div`
  position: relative;
  background-color: ${Colors.BG_BLUE_LIGHT};
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
`;

const LeadershipSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.375rem;
  padding-bottom: 9.375rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  }
`;

const LeftStripBg = styled(StripBgDesign)`
  bottom: 8.816rem;
  left: -12rem;
  width: 24.313rem;
`;

const LeftFirstStrip = styled.div`
  width: 10rem;
  height: 0.875rem;
  margin-left: 7.688rem;
  margin-bottom: 1.675rem;
  background-color: ${Colors.THIRD};
`;

const LeftSecondStrip = styled.div`
  height: 2.125rem;
  margin-bottom: 0.563rem;
  background-color: ${Colors.SECONDARY};
`;

const LeftThirdStrip = styled.div`
  width: 10rem;
  height: 1.75rem;
  margin-left: 8.25rem;
  background-color: ${Colors.BG_GREEN4};
`;

const MainParagraph = styled(Paragraph)`
  width: 38.75rem;
  margin-bottom: 3.125rem;

  > div {
    &:first-child {
      width: 100%;
      text-align: center;
      line-height: 2.625rem;
      font-size: 1.75rem;
    }
    &:last-child {
      line-height: 1.5rem;
      text-align: left;
      font-size: 0.875rem;
    }
  }
  @media (max-width: ${WindowSize.tablet}) {
    width: 100%;
    margin-bottom: 1.875rem;
  }
`;

const PorfileListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -1.563rem -0.625rem;

  @media (max-width: ${WindowSize.laptopS}) {
    margin: 0rem;
  }
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 18.75rem;
  margin: 1.563rem 0.625rem;

  > div {
    &:first-child {
      width: 12.5rem;
      margin-bottom: 1.25rem;

      img {
        width: 100%;
      }
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    margin: 0rem;

    & + div {
      margin-top: 1.875rem;
    }
  }
`;

const LeadershipSection = ({ contents }) => {
  return (
    <LeadershipSectionFrame>
      <LeadershipSectionWrapper>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <LeftStripBg>
            <LeftFirstStrip />
            <LeftSecondStrip />
            <LeftThirdStrip />
          </LeftStripBg>
        </Box>
        <MainParagraph title={contents.Section_4_Paragraph.title}>
          {contents.Section_4_Paragraph.content}
        </MainParagraph>
        <PorfileListWrapper>
          {contents.Section_4_Profile_List.map(
            ({ avatar, name, title, linkedin }, index) => (
              <ProfileItem key={`profile-item-${index}`}>
                <div>
                  <img
                    src={avatar?.localFile?.publicURL}
                    alt={avatar?.caption}
                  />
                </div>
                <CustomTitle
                  lineHeight="2.25rem"
                  fontSize="1.5rem"
                  marginBottom="0.125rem"
                >
                  {name}
                </CustomTitle>
                <CustomTitle
                  lineHeight="1.5rem"
                  fontSize="1rem"
                  fontWeight="normal"
                  marginBottom="0.375rem"
                >
                  {title}
                </CustomTitle>
                <OutboundLink
                  href={linkedin.link}
                  target="_blank"
                  title="Linkedin"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin.media?.localFile?.publicURL}
                    alt={linkedin.media?.caption}
                  />
                </OutboundLink>
              </ProfileItem>
            )
          )}
        </PorfileListWrapper>
      </LeadershipSectionWrapper>
    </LeadershipSectionFrame>
  );
};

export default LeadershipSection;

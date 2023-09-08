import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

import Paragraph from "../../components/paragraph";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const MissionSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 8.375rem;
  padding-bottom: 9rem;
  background-color: ${Colors.SECONDARY};
  background-position: center;
  background-size: cover;

  @media (max-width: ${WindowSize.mobileL}) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const MissionSectionWrapper = styled.div`
  background-color: ${Colors.WHITE};
  background-position: center;
  background-size: cover;
`;

const ContentWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65rem;
  padding-top: 1rem;
  padding-bottom: 0.375rem;

  > div:first-child {
    flex: 0 0 27.5rem;

    img {
      width: 100%;
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    > div:first-child {
      flex: 0 0 20rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column-reverse;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    > div:first-child {
      flex: 1 1 auto;
      margin: 0rem -1.25rem;
    }
  }
`;

const ContentParagraph = styled(Paragraph)`
  margin-left: 2.5rem;

  > div {
    color: ${Colors.PRIMARY};

    &:first-child {
      width: 100%;
      margin-bottom: 1rem;
      line-height: 2.625rem;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;

      > span {
        font-size: 2.813rem;
        font-weight: 800;
      }
    }
    &:last-child {
      line-height: 1.5rem;
      text-align: left;
      font-size: 0.875rem;
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    > div:first-child {
      font-size: 1.825rem;

      > span {
        font-size: 2.25rem;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    margin-left: 0rem;
    margin-bottom: 1.5rem;

    > div:first-child {
      font-size: 1.5rem;

      > span {
        font-size: 1.75rem;
      }
    }
  }
`;

const AboutUsMissionSection = ({ contents }) => {
  return (
    <MissionSectionFrame>
      <MissionSectionWrapper>
        <ContentWrapper>
          <div>
            <img
              src={contents.Section_3_Image?.localFile?.publicURL}
              alt={contents.Section_3_Image?.caption}
            />
          </div>
          <ContentParagraph title={parse(contents.Section_3_Paragraph.title)}>
            {contents.Section_3_Paragraph.content}
          </ContentParagraph>
        </ContentWrapper>
      </MissionSectionWrapper>
    </MissionSectionFrame>
  );
};

export default AboutUsMissionSection;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Paragraph from "../../components/paragraph";
import CustomButton from "../../components/custom-button";
import { Colors } from "../../constants/share/colors";
import { WindowSize } from "../../constants/style/layout";

const PageIntroSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.PRIMARY};
`;

const PageIntroSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 6.438rem;
  padding-bottom: 5.188rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-wrap: wrap;
    padding: 1rem 1.5rem;
  }
`;

const PageIntroItem = styled.div`
  flex: 0 0 28.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 32rem;
  margin: 0rem 3.125rem;
  border-radius: 1.25rem;
  padding: 2.5rem 4.625rem 0rem;
  background-image: url(${props => props.$url});
  background-size: cover;
  background-position: center;

  > a {
    text-align: center;

    &:last-child {
      width: 10rem;
      margin-top: 1.375rem;

      button {
        width: 100%;
        height: 2.25rem;
      }
    }
  }

  @media (max-width: ${WindowSize.laptopS}) {
    flex: 1 1 50%;
    padding: 1rem 1rem 0rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 100%;
    margin: 1.5rem 0rem;
  }
`;

const ItemParagraph = styled(Paragraph)`
  > div {
    &:first-child {
      line-height: 2.938rem;
      font-size: 1.75rem;
    }
    &:last-child {
      text-align: center;
    }
  }
`;

const ItemAttachedLink = styled.div``;

const PageIntroSection = ({ contents }) => {
  return (
    <PageIntroSectionFrame>
      <PageIntroSectionWrapper>
        {contents.Section_4_Page_Intro_List.map(
          ({ title, content, attachment, button, background }, index) => (
            <PageIntroItem
              key={`page-intro-item-${index}`}
              $url={background?.localFile?.publicURL}
            >
              <ItemParagraph title={title} gap="0.375rem">
                {content}
              </ItemParagraph>
              {attachment && (
                <ItemAttachedLink>
                  <Link to={attachment.link}>{attachment.text}</Link>
                </ItemAttachedLink>
              )}
              <Link to={button.link}>
                <CustomButton>{button.text}</CustomButton>
              </Link>
            </PageIntroItem>
          )
        )}
      </PageIntroSectionWrapper>
    </PageIntroSectionFrame>
  );
};

export default PageIntroSection;

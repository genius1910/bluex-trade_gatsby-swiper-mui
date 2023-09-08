import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

import Paragraph from "../../components/paragraph";
import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const PositionSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(
    to top,
    ${Colors.WHITE} 0%,
    ${Colors.BG_BLUE_LIGHT3} 100%
  );
`;

const PositionSectionWrapper = styled.div`
  ${LayoutStyle}
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 9.375rem;
  padding-bottom: 9.375rem;

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 4.375rem;
    padding-bottom: 4.375rem;
  }
`;

const MainParagraph = styled(Paragraph)`
  width: 48.75rem;
  margin-bottom: 3.125rem;

  > div {
    &:first-child {
      margin-bottom: 3.125rem;
      line-height: 2.125rem;
      font-family: roboto;
      font-size: 1.75rem;
      font-weight: bold;
    }
    &:last-child {
      text-align: center;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 2.5rem;

  @media (max-width: ${WindowSize.mobileL}) {
    flex-wrap: wrap;
  }
`;

const TabsItem = styled(Button)`
  position: relative;
  min-width: 8.375rem;
  cursor: pointer;

  div {
    color: ${Colors.GRAY11};
  }
  &.active div {
    color: ${Colors.SECONDARY};
  }
  & + button {
    margin-left: 1.5rem;
  }
`;

const PositionListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: -0.625rem;
`;

const PositionItem = styled.div`
  flex: 0 0 22rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0.625rem;
  border-radius: 0.5rem;
  padding: 1.875rem 1.25rem;
  background-color: ${Colors.BLUE_GREEN6};

  > div:first-child {
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    line-height: 1.25rem;
    font-size: 1.125rem;
    font-family: roboto;
    font-weight: bold;
    color: ${Colors.SECONDARY};
  }
  button {
    width: fit-content;
    border-radius: 2px;
    border: 2px solid ${Colors.SECONDARY};
    padding-left: 2.438rem;
    padding-right: 2.438rem;
    background-color: ${Colors.SECONDARY};
    color: ${Colors.WHITE};
    font-size: 0.875rem;
    font-weight: 900;

    &:hover {
      background-color: ${Colors.WHITE};
      color: ${Colors.SECONDARY};
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    align-items: center;
  }
`;

const PositionTitleWrapper = styled.div`
  display: flex;
  height: 3.75rem;
  margin-bottom: 1.25rem;
  align-items: center;

  @media (max-width: ${WindowSize.mobileL}) {
    height: fit-content;
    text-align: center;
  }
`;

const PositionStyle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: roboto;
  color: ${Colors.PRIMARY};
`;

const PositionTitle = styled(PositionStyle)`
  -webkit-line-clamp: 2;
  line-height: 1.875rem;
  font-size: 1.375rem;
  font-weight: bold;

  @media (max-width: ${WindowSize.mobileL}) {
    display: flex;
    -webkit-line-clamp: unset;
  }
`;

const PositionContent = styled(PositionStyle)`
  -webkit-line-clamp: 8;
  height: 12rem;
  margin-bottom: 1.563rem;
  line-height: 1.5rem;
  font-size: 1rem;

  @media (max-width: ${WindowSize.mobileL}) {
    display: flex;
    -webkit-line-clamp: unset;
    height: fit-content;
    text-align: center;
  }
`;

const PositionSection = ({ contents }) => {
  const defaultType = contents.Section_6_Position_Types[0]?.link;
  const [selected, setSelected] = useState(defaultType);

  const navigateUrl = url => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PositionSectionFrame>
      <PositionSectionWrapper>
        <MainParagraph title={contents.Section_6_Paragraph.title}>
          {contents.Section_6_Paragraph.content}
        </MainParagraph>
        <TabsList>
          {contents.Section_6_Position_Types.map(({ text, link }, index) => (
            <TabsItem
              key={`position-type-${index}`}
              className={selected === link ? "active" : null}
              onClick={() => {
                setSelected(link);
              }}
            >
              <CustomTitle
                color={Colors.GRAY13}
                lineHeight="1.5rem"
                fontSize="1.125rem"
                fontWeight="bold"
              >
                {text}
              </CustomTitle>
            </TabsItem>
          ))}
        </TabsList>
        <PositionListWrapper>
          {contents.Section_6_Position_List.filter(
            ({ type }) => selected === defaultType || selected === type
          ).map(({ type, description, link }, index) => (
            <PositionItem key={`position-item-${index}`}>
              <div>{type.replaceAll("_", " ")}</div>
              <PositionTitleWrapper>
                <PositionTitle>{description.title}</PositionTitle>
              </PositionTitleWrapper>
              <PositionContent>{description.content}</PositionContent>
              <Button onClick={() => navigateUrl(link.link)}>
                {link.text}
              </Button>
            </PositionItem>
          ))}
        </PositionListWrapper>
      </PositionSectionWrapper>
    </PositionSectionFrame>
  );
};

export default PositionSection;

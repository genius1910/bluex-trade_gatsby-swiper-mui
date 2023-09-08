import React from "react";
import styled from "styled-components";
import CustomTitle from "./custom-title";

const TabsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${tabsListStyle =>
    tabsListStyle.justifyContent
      ? tabsListStyle.justifyContent
      : "space-around"};
`;

const TabsItem = styled.div`
  position: relative;
  cursor: pointer;
  width: ${props => props.$width};

  &::after {
    content: "";
    position: absolute;
    width: 0rem;
    height: ${underlineStyle => underlineStyle.height};
    left: 0rem;
    bottom: ${underlineStyle => underlineStyle.bottom};
    background-color: ${underlineStyle => underlineStyle.backgroundColor};
    transition: 0.1s;
  }
  &.active::after {
    width: 100%;
  }
`;
const CustomTabs = ({
  tabItems,
  tabIndex,
  changeTabIndex,
  tagProperty,
  underlineStyle,
  tabsListStyle,
}) => (
  <TabsList {...tabsListStyle}>
    {tabItems.map(({ tag }, index) => {
      return (
        <TabsItem
          key={`tab-item-${index}`}
          className={tabIndex === index ? "active" : null}
          $width={tagProperty.width}
          onClick={() => {
            changeTabIndex(index);
          }}
          {...underlineStyle}
        >
          <CustomTitle
            color={
              tabIndex === index ? tagProperty.selectColor : tagProperty.color
            }
            lineHeight={tagProperty.lineHeight}
            textTransform={tagProperty.textTransform}
            fontSize={tagProperty.fontSize}
            fontWeight={tagProperty.fontWeight}
          >
            {tag}
          </CustomTitle>
        </TabsItem>
      );
    })}
  </TabsList>
);

export default CustomTabs;

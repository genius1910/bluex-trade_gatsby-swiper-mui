import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Box, Button, Slide } from "@mui/material";

import CustomTitle from "../../components/custom-title";
import CustomButton from "../../components/custom-button";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

import IconLeftArrow from "../../images/icon/combined-shape.inline.svg";
import IconRightArrow from "../../images/icon/combined-shape-copy.inline.svg";

const SlideSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.BLUE_LIGHT};
  overflow: hidden;
`;

const SlideSectionWrapper = styled.div`
  ${LayoutStyle}
  width: 65rem;
  height: 30rem;
  box-sizing: border-box;
  padding-top: 4rem;
  padding-bottom: 3.625rem;

  @media (max-width: ${WindowSize.tablet}) {
    height: 47.5rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    height: 37.5rem;
    padding-top: 3.125rem;
    padding-bottom: 3.125rem;
  }
`;

const SlideButton = styled(Button)`
  &.MuiButton-root {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    @media (max-width: ${WindowSize.tablet}) {
      opacity: 0.5;
    }
  }
`;

const SlideLeftButton = styled(SlideButton)`
  left: 0rem;
`;

const SlideRightButton = styled(SlideButton)`
  right: 0rem;
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const TabsItem = styled.div`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    width: 0rem;
    height: 0.125rem;
    left: 50%;
    bottom: -1.625rem;
    transform: translate(-50%, 0);
    background-color: ${Colors.SECONDARY};
    transition: 0.1s;
  }
  &.active::after {
    width: 5rem;
  }
`;

const CustomSlide = styled(Slide)`
  > div {
    height: 20rem;
    padding-top: 4.563rem;
    box-sizing: border-box;
  }
  &.last > div > div:first-child {
    text-align: center;

    img {
      width: 23.438rem;
    }
  }
  @media (max-width: ${WindowSize.tablet}) {
    > div {
      height: fit-content;
      padding-top: 2rem;

      img {
        width: 100%;
        margin-top: 2.5rem;
      }
    }
  }
`;

const SlideContent = styled.div`
  display: flex;
  height: fit-content;

  > div {
    &:first-child {
      flex: 0 0 25rem;
      display: flex;
      align-items: center;
      min-height: 15rem;

      img {
        width: 100%;
      }
    }
    &:last-child {
      flex: 1 1 25rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      margin-left: 2.813rem;

      a {
        display: block;
        width: 11rem;
        height: 2.875rem;

        button {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    > div {
      &:first-child {
        flex: 0 0 20rem;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex-direction: column-reverse;

    > div {
      &:first-child {
        flex: 1 1 auto;
      }
      &:last-child {
        flex: 1 1 auto;
        justify-content: center;
        margin-left: 0rem;
        margin-bottom: 1.25rem;

        > div {
          text-align: center;
        }
      }
    }
  }
`;

const ItemTitle = styled(CustomTitle)`
  width: 100%;
  line-height: 2.625rem;
  color: ${Colors.SECONDARY};
  font-family: Roboto-Medium, serif;
  font-size: 1.75rem;
  font-weight: bold;
  text-align: left;
  white-space: pre-wrap;

  @media (max-width: ${WindowSize.tablet}) {
    flex: 1 1 auto;
    margin-right: 0rem;
    margin-bottom: 1.25rem;
  }
`;

const SlideSection = ({ contents }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabLastIndex, setTabLastIndex] = useState(0);

  const changeTabIndex = newTabIndex => {
    if (newTabIndex === tabIndex) {
      return;
    }

    const listLength = contents.Section_3_Tab_Media.length;
    if (newTabIndex >= listLength) {
      newTabIndex = 0;
    }

    if (newTabIndex < 0) {
      newTabIndex = listLength - 1;
    }

    setTabLastIndex(tabIndex);
    setTabIndex(newTabIndex);
  };

  const setSlideDirection = index => {
    if (tabLastIndex === tabIndex) {
      return "right";
    }

    //switch to this slide
    if (tabLastIndex !== index && tabIndex === index) {
      if (tabLastIndex >= index) {
        return "right";
      } else {
        return "left";
      }
    }

    //switch away from this slide
    if (tabLastIndex === index && tabIndex !== index) {
      if (tabIndex >= index) {
        return "right";
      } else {
        return "left";
      }
    }
  };

  return (
    <SlideSectionFrame>
      <SlideSectionWrapper>
        <SlideLeftButton onClick={() => changeTabIndex(tabIndex - 1)}>
          <IconLeftArrow />
        </SlideLeftButton>
        <SlideRightButton onClick={() => changeTabIndex(tabIndex + 1)}>
          <IconRightArrow />
        </SlideRightButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <TabsList>
            {contents.Section_3_Tab_Media.map(({ tag }, index) => (
              <TabsItem
                key={`tab-item-${index}`}
                className={tabIndex === index ? "active" : null}
                onClick={() => {
                  changeTabIndex(index);
                }}
              >
                <CustomTitle
                  fontFamily="Roboto-Medium, serif"
                  fontSize="1.25rem"
                  fontWeight="500"
                >
                  {tag}
                </CustomTitle>
              </TabsItem>
            ))}
          </TabsList>
        </Box>
        {contents.Section_3_Tab_Media.map(
          ({ image, description, button }, index) => (
            <CustomSlide
              key={`slide-item-${index}`}
              className={index === 3 ? "last" : null}
              direction={setSlideDirection(index)}
              in={tabIndex === index}
              mountOnEnter
              unmountOnExit
            >
              <Box>
                <SlideContent>
                  <div>
                    {
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        src={image?.localFile?.publicURL}
                        alt={image?.caption}
                      />
                    }
                  </div>
                  <div>
                    <ItemTitle>{description.content}</ItemTitle>
                    {button && (
                      <div>
                        <Link to={button.link}>
                          <CustomButton>{button.text}</CustomButton>
                        </Link>
                      </div>
                    )}
                  </div>
                </SlideContent>
              </Box>
            </CustomSlide>
          )
        )}
      </SlideSectionWrapper>
    </SlideSectionFrame>
  );
};

export default SlideSection;

import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Paragraph from "./paragraph";
import { ImgShadow } from "../constants/share/common";
import { Colors } from "../constants/share/colors";
import { WindowSize } from "../constants/style/layout";

const GalleryWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem auto;
  overflow: visible;
`;

const GalleryItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.$flexDirection};
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: ${props => `${props.$desktopGap}rem`};
  }
  > div:first-child {
    flex: ${props => props.$firstChildFlex};
    margin-bottom: ${props => props.$flexGap};
  }
  > div:last-child {
    flex: ${props => props.$secondChildFlex};

    img {
      width: 100%;
    }
  }
  @media (max-width: ${WindowSize.laptopS}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    & + & {
      margin-top: ${props => `${props.$mobildeGap}rem`};
    }
    > div:first-child {
      flex: 1 1 100%;
      align-items: center;
      padding-left: auto;
      margin-bottom: 1.875rem;

      > div {
        &:first-child,
        &:last-child {
          text-align: center;
        }
      }
    }
    > div:last-child {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
      min-height: 12rem;
    }
  }
`;

const paragraphContentStyle = {
  fontSize: "1rem",
};

const CustomGallery = ({
  datas,
  genImg,
  genContent,
  rightFlex = 18.75,
  leftFlex = 33.75,
  titleColor = Colors.PRIMARY,
  contentColor = Colors.BLUE_DARK,
  desktopGap = 9.375,
  mobildeGap = 4.375,
}) => (
  <GalleryWrapper>
    {datas.map((attri, index) => {
      const { image, description, alt, type } = attri;
      let direction = "row";
      let firstChildFlex = `0 0 ${rightFlex}rem`;
      let secondChildFlex = `0 0 ${leftFlex}rem`;

      if (type === "left") {
        direction = "row-reverse";
      }

      if (type === "center") {
        direction = "column";
        firstChildFlex = "1 1 auto";
        secondChildFlex = "0 1 30.125rem";
      }

      return (
        <GalleryItem
          key={`gallery-item-${index}`}
          $width={image.width}
          $height={image.height}
          $flexDirection={direction}
          $flexGap={type === "center" ? "1.875rem" : "initial"}
          $firstChildFlex={firstChildFlex}
          $secondChildFlex={secondChildFlex}
          $desktopGap={desktopGap}
          $mobildeGap={mobildeGap}
        >
          <Paragraph
            title={description.title}
            titleFontSize="1.75rem"
            titleColor={titleColor}
            contentClass={paragraphContentStyle}
            contentColor={contentColor}
            alignItems={type === "center" ? "center" : "flex-start"}
          >
            {genContent ? genContent(index) : description.content}
          </Paragraph>
          {genImg ? (
            <Box>{genImg(attri, index)}</Box>
          ) : (
            <ImgShadow>
              <LazyLoadImage
                src={image?.localFile?.publicURL}
                alt={alt}
                effect="blur"
              />
            </ImgShadow>
          )}
        </GalleryItem>
      );
    })}
  </GalleryWrapper>
);

export default CustomGallery;

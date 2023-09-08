import React from "react";
import styled from "styled-components";

import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";

const GallerySectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const GallerySectionWrapper = styled.div`
  ${LayoutStyle}
  width: 80rem;
  padding-top: 4.25rem;
  padding-bottom: 4.25rem;

  > div:first-child {
    margin-bottom: 1.75rem;
  }
  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    > div:first-child {
      margin-bottom: 1.5rem;
    }
  }
`;

const GalleryListFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryItems = styled.div`
  flex: 0 1 24.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  img {
    width: 100%;
  }
  @media (max-width: ${WindowSize.laptopS}) {
    flex: 1 1 45%;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    flex: 1 1 100%;
  }
`;

const GallerySection = ({ contents }) => {
  return (
    <GallerySectionFrame>
      <GallerySectionWrapper>
        <CustomTitle
          lineHeight="4.313rem"
          fontSize="40px"
          whiteSpace="prewrap"
          color={Colors.SECONDARY}
        >
          {contents.Section_5_Title}
        </CustomTitle>
        <GalleryListFrame>
          {contents.Section_5_Images.map((img, index) => (
            <GalleryItems key={`gallery-item-${index}`}>
              {
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={img?.localFile?.publicURL} alt={img?.caption} />
              }
            </GalleryItems>
          ))}
        </GalleryListFrame>
      </GallerySectionWrapper>
    </GallerySectionFrame>
  );
};

export default GallerySection;

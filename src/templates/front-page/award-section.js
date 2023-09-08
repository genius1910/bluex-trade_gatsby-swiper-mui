import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { MarkDownTranslator } from "../../utils/markdown-translator";
import CustomTitle from "../../components/custom-title";
import { DefaultFont } from "../../constants/style/default-font";
import { Colors } from "../../constants/share/colors";
import { LayoutStyle } from "../../constants/style/layout";

const AwardListFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

const AwardListPCFrame = styled.div`
  ${LayoutStyle}
  position: absolute;
  top: -5rem;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 64rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1.188rem;
  background-color: ${Colors.WHITE};

  > div:first-child {
    width: 22.5rem;
    font-weight: 500;

    p {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
    .strong {
      font-weight: 800;
    }
  }
  @media (max-width: 1350px) {
    width: 100%;
  }
  @media (max-width: 1140px) {
    display: none;
  }
`;

const AwardItem = styled.div`
  flex: 0 0 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.875rem;

  div {
    display: flex;
    align-items: center;

    img {
      max-width: 3.5rem;
      max-height: 100%;
    }
  }

  @media (max-width: 1300px) {
    flex: 0 1 10rem;
    margin: 0.625rem 0rem;
  }
`;

const AwardListMobileFrame = styled.div`
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 0rem;

  > div:first-child {
    width: 22.5rem;
    font-weight: 500;

    p {
      margin-block-start: 0em;
    }
    .strong {
      font-weight: 800;
    }
  }
  .swiper {
    width: 100%;
    height: 9.75rem;

    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      div {
        &:first-child {
          display: flex;
          align-items: center;
          height: 6rem;
          margin-bottom: 1rem;

          img {
            max-width: 10.875rem;
            max-height: 100%;
          }
        }
        &:last-child {
          width: 14rem;
          ${DefaultFont}
          text-align: center;
          line-height: 1.5rem;
          font-size: 1.125rem;
          font-weight: 900;
          white-space: pre-wrap;
          color: ${Colors.PRIMARY};
        }
      }
    }
  }

  @media (max-width: 1140px) {
    display: flex;
  }
`;

const AwardSection = ({ contents }) => (
  <AwardListFrame>
    <AwardListPCFrame>
      <CustomTitle whiteSpace="pre-wrap" textAlign="left">
        {MarkDownTranslator(contents.Section_2_Title?.data?.Section_2_Title)}
      </CustomTitle>
      {contents.Section_2_Media_List.map(({ image, description }, index) => (
        <AwardItem key={`award-list-${index}`}>
          <div>
            <LazyLoadImage
              src={image?.localFile?.publicURL}
              alt={description.title}
              effect="blur"
            />
          </div>
        </AwardItem>
      ))}
    </AwardListPCFrame>
    <AwardListMobileFrame>
      <CustomTitle whiteSpace="pre-wrap">
        {MarkDownTranslator(contents.Section_2_Title?.data?.Section_2_Title)}
      </CustomTitle>
      <Swiper
        spaceBetween={60}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 768px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        modules={[Autoplay]}
      >
        {contents.Section_2_Media_List.map(({ image, description }, index) => (
          <SwiperSlide key={`award-swiper-${index}`}>
            <div>
              <LazyLoadImage
                src={image?.localFile?.publicURL}
                alt={description.title}
              />
            </div>
            <div>{description.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </AwardListMobileFrame>
  </AwardListFrame>
);

export default AwardSection;

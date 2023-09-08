import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";

import IconComma from "../../images/icon/icon-quote.inline.svg";
import IconFiveStars from "../../images/icon/icon-five-stars-ranking.inline.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-size: cover;
  background-color: ${Colors.BLUE_LIGHT3};
  background-position: center;
  background-size: cover;
`;

const TestimonialItem = styled.div`
  position: relative;
  width: 30rem;
  height: 22rem;
  box-sizing: border-box;
  padding: 3.75rem 2.5rem 2.5rem;
  margin: 0rem 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 20px 0 rgba(0, 21, 73, 0.1);
  background-color: ${Colors.WHITE};

  > svg:first-child {
    position: absolute;
    left: -1.25rem;
    top: 1.25rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    ${DefaultFont}
    line-height: 1.4rem;
    font-style: italic;
  }

  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
    height: 28rem;
    padding: 3.75rem 1.25rem 1.5rem;
    margin: 2rem 0rem;

    > svg:first-child {
      left: 0rem;
    }
  }
`;

const TestimonialsWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.25rem;
  padding-bottom: 2rem;

  .swiper {
    width: 40rem;
    height: 25rem;
  }
  .swiper-slide-active,
  .swiper-slide-next,
  .swiper-slide-prev {
    margin-left: 2rem;
  }
  .swiper-slide-duplicate-next,
  .swiper-slide-duplicate-prev,
  .swiper-slide-next,
  .swiper-slide-prev {
    ${TestimonialItem} {
      &:after {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0rem;
        left: 0rem;
        content: "";
        background-color: ${Colors.WHITE};
        opacity: 0.7;
        transition: opacity 200ms;
      }
      &:hover:after {
        opacity: 0;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
  }
  .swiper-pagination-bullet-active {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${WindowSize.laptopS}) {
    padding-top: 2.5rem;
  }
  @media (max-width: ${WindowSize.mobileL}) {
    .swiper {
      width: 100%;
      height: 35rem;
    }
    .swiper-slide-active,
    .swiper-slide-next,
    .swiper-slide-prev {
      margin-left: 0rem;
    }
    .swiper-slide-next,
    .swiper-slide-prev {
      ${TestimonialItem}:after {
        width: 100%;
        height: 26.625rem;
      }
    }
  }
`;

const SpeakerInfoWrapper = styled.div`
  position: absolute;
  left: 2.5rem;
  bottom: 1.8rem;

  > div {
    font-style: normal;

    &:first-child {
      color: ${Colors.SECONDARY};
    }
  }
`;

const TestimonialSection = ({ contents }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <TestimonialsFrame>
      <TestimonialsWrapper>
        <CustomTitle
          marginBottom="2.875rem"
          lineHeight="3rem"
          whiteSpace="prewrap"
          fontSize="2.25rem"
        >
          {contents.Section_6_Title}
        </CustomTitle>
        <Swiper
          spaceBetween={0}
          effect={"coverflow"}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          onClick={swiper => {
            const ai = swiper.activeIndex;
            const ci = swiper.clickedIndex;
            const length = swiper.visibleSlidesIndexes.length;
            if (ai < ci || (ci === 1 && ai === length)) {
              swiper.slideNext();
              return;
            }

            if (ai > ci || (ai === 1 && ci === length)) {
              swiper.slidePrev();
            }
          }}
        >
          {contents.Section_6_Testimonial_List.map(
            ({ content, name, position, company }, index) => (
              <SwiperSlide key={`testimonial-item-${index}`}>
                <TestimonialItem>
                  <IconComma />
                  <IconFiveStars />
                  <div>{content}</div>
                  <SpeakerInfoWrapper>
                    <div>{`${name} | ${position}`}</div>
                    <div>{company}</div>
                  </SpeakerInfoWrapper>
                </TestimonialItem>
              </SwiperSlide>
            )
          )}
          <div className="swiper-button-prev" ref={navigationPrevRef} />
          <div className="swiper-button-next" ref={navigationNextRef} />
        </Swiper>
      </TestimonialsWrapper>
    </TestimonialsFrame>
  );
};

export default TestimonialSection;

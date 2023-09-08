import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import CustomTitle from "../../components/custom-title";
import { LayoutStyle, WindowSize } from "../../constants/style/layout";
import { Colors } from "../../constants/share/colors";
import { DefaultFont } from "../../constants/style/default-font";

import IconComma from "../../images/icon/comma.inline.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSectionFrame = styled.div`
  position: relative;
  background-color: ${Colors.BLUE_LIGHT};
  width: 100%;
  height: fit-content;
  background-position: center;
  background-size: cover;
`;

const TestimonialItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28.75rem;
  height: 26.625rem;
  background-color: ${Colors.SECONDARY};
  box-shadow: 0 2px 30px 0 rgba(0, 21, 73, 0.2);

  svg {
    height: 3.125rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 1.875rem 1.25rem;
    ${DefaultFont}
    line-height: 1.5rem;
    text-align: center;
    font-style: italic;
    color: ${Colors.WHITE};

    * + div {
      margin-top: 1.875rem;
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    width: 100%;
  }
`;

const TestimonialSectionWrapper = styled.div`
  ${LayoutStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.375rem;
  padding-bottom: 9.375rem;

  .swiper {
    width: 36.75rem;
    height: 30rem;
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

  @media (max-width: ${WindowSize.tablet}) {
    padding-top: 10rem;
    padding-bottom: 6.25rem;
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
  font-style: normal;

  div + div {
    margin-top: 0.625rem;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  bottom: 0rem;
  background-color: ${Colors.WHITE};

  img {
    max-width: 12.375rem;
    max-height: 2.125rem;
  }
`;

const TestimonialSection = ({ contents }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <TestimonialSectionFrame>
      <TestimonialSectionWrapper>
        <CustomTitle
          lineHeight="2.625rem"
          fontSize="1.75rem"
          marginBottom="3.125rem"
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
            ({ content, logo, speaker, title }, index) => (
              <SwiperSlide key={`testimonial-item-${index}`}>
                <TestimonialItem>
                  <div>
                    <IconComma />
                    <div>{content}</div>
                    <SpeakerInfoWrapper>
                      <CustomTitle
                        lineHeight="2rem"
                        fontSize="1.125rem"
                        color={Colors.WHITE}
                      >
                        {speaker}
                      </CustomTitle>
                      <div>{title}</div>
                    </SpeakerInfoWrapper>
                  </div>
                  <LogoWrapper>
                    <img src={logo?.localFile?.publicURL} alt={logo?.caption} />
                  </LogoWrapper>
                </TestimonialItem>
              </SwiperSlide>
            )
          )}
          <div className="swiper-button-prev" ref={navigationPrevRef} />
          <div className="swiper-button-next" ref={navigationNextRef} />
        </Swiper>
      </TestimonialSectionWrapper>
    </TestimonialSectionFrame>
  );
};

export default TestimonialSection;

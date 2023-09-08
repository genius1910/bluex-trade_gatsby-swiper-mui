import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import CustomTitle from "../../components/custom-title";
import { Colors } from "../../constants/share/colors";
import { WindowSize } from "../../constants/style/layout";

import "swiper/css";

const LogoSectionFrame = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
`;

const LogoSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 3.438rem;
  padding-bottom: 5.625rem;

  .swiper {
    width: 100%;
    height: 9.75rem;

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      img {
        max-width: 20.625rem;
      }
    }
  }
  @media (max-width: ${WindowSize.mobileL}) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const Title = styled(CustomTitle)`
  z-index: 20;
  margin-bottom: 1.875rem;
  line-height: 3rem;
  white-space: pre-wrap;
  font-size: 2.25rem;
  font-weight: 700;
  color: ${Colors.PRIMARY};

  & > span {
    font-weight: 800;
    color: ${Colors.SECONDARY};
  }
`;

const LogoSection = ({ contents }) => {
  return (
    <LogoSectionFrame>
      <LogoSectionWrapper>
        <Title>{parse(contents.Section_5_Title)}</Title>
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
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          modules={[Autoplay]}
        >
          {contents.Section_5_Logo_List.map((logo, index) => (
            <SwiperSlide key={`logo-item-${index}`}>
              <LazyLoadImage
                src={logo?.localFile?.publicURL}
                alt={logo?.caption}
                width={`100%`}
                effect="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </LogoSectionWrapper>
    </LogoSectionFrame>
  );
};

export default LogoSection;

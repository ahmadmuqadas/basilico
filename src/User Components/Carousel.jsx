import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import backgroundOne from "../Media/backgroundone.jpg";
import backgroundTwo from "../Media/backgroundTwo.jpg";
import backgroundThree from "../Media/backgroundThree.mp4";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const StyledSwiper = styled(Swiper)`
  position: relative;
  /* display: flex; */
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-image: url(${(props) => props.backgroundImage});
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff; // Corrected color code
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  // Combined media query
  @media (min-width: 600px) {
    border: solid white
      ${(props) => (props.scrollPosition >= 54 ? "0" : "2rem")};
    border-bottom: none;
    background-size: 120% 120%;
    transition: border 0.2s ease-in-out, background-size ease-in-out 1s;
    transition-delay: 0.1s, 1s;

    &.swiper-slide-active {
      // Uncomment or adjust as needed
      background-size: 100% 100%;
    }
  }

  h1,
  h4 {
    opacity: 0;
    transition: all ease 0.8s;
    transition-delay: 2s;
  }

  &.swiper-slide-active h1,
  &.swiper-slide-active h4 {
    opacity: 1;
    transition: all ease 0.6s;
    transition-delay: 1.8s;
  }

  &.swiper-slide-active div {
    background-color: #00000053; // Corrected opacity in hex color
  }
`;

const CrouselVideo = styled.video`
  /* width: 100%; */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DottedSvg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const CarouselHeader = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const CarouselSubHeader = styled.h4`
  margin-bottom: 1rem;
  color: #ffffffca;
`;

const Overly = styled.div`
  position: absolute;
  background-color: #00000098;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
  transition: all ease-in-out 1s;
  transition-delay: 0.5s;
`;
const Carousel = () => {
  // In Case you want to work on 'current index' the code below Helps You!

  // const [swiperIndex, setSwiperIndex] = useState();

  // console.log(swiperIndex);

  // const handleSlideChange = (swiper) => {

  //   setSwiperIndex(swiper.activeIndex)
  // };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={2000}
        autoplay={{ delay: 3000 }}

        // onSlideChange={handleSlideChange}
      >
        <StyledSwiperSlide
          scrollPosition={scrollPosition}
          backgroundImage={backgroundOne}
        >
          <Overly></Overly>
          <CarouselSubHeader>IMAGE CAPTION #4</CarouselSubHeader>
          <CarouselHeader>Design is a process.</CarouselHeader>
        </StyledSwiperSlide>

        <StyledSwiperSlide
          scrollPosition={scrollPosition}
          backgroundImage={backgroundTwo}
        >
          <Overly></Overly>
          <CarouselSubHeader>IMAGE CAPTION #4</CarouselSubHeader>
          <CarouselHeader>Design is a process.</CarouselHeader>
        </StyledSwiperSlide>

        <StyledSwiperSlide scrollPosition={scrollPosition}>
          <CrouselVideo autoPlay loop muted playsInline src={backgroundThree} />
        </StyledSwiperSlide>
      </StyledSwiper>
    </>
  );
};

export default Carousel;

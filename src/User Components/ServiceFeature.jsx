import React from "react";
import styled from "styled-components";
import Wave from "./Wave";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const ServiceFeatureWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  flex-direction: column;
  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 0 2rem;
  }
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem 0rem;
`;

const ServiceImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: cover;
`;

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media (min-width: 600px) {
    padding: 5rem 10%;
  }
`;
const ServiceTxt = styled.div`
  border-bottom: solid #d6d6d6 1px;
  width: 95%;
  padding: 0.8rem 0;
  display: flex;
  color: #636363;
  justify-content: space-between;
`;

const ServiceTitle = styled.p``;
const ServicePercentage = styled.p``;

const StyledSwiperSlide = styled(SwiperSlide)``;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    height: 40%;
  }
`;
const ServiceFeature = () => {
  return (
    <ServiceFeatureWrapperDiv>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={2000}
        autoplay={{ delay: 3000 }}
        navigation
      >
        <StyledSwiperSlide>
          <ServiceImg src="https://source.unsplash.com/random/?dark" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <ServiceImg src="https://source.unsplash.com/random/?white" />
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <ServiceImg src="https://source.unsplash.com/random/?green" />
        </StyledSwiperSlide>
        <Wave />
      </StyledSwiper>

      <ServiceItem>
        <Service>
          <ServiceTxt>
            <ServiceTitle>FAST SERVICE</ServiceTitle>
            <ServicePercentage>95%</ServicePercentage>
          </ServiceTxt>

          <ServiceTxt>
            <ServiceTitle>FREE RESERVATION</ServiceTitle>
            <ServicePercentage>100%</ServicePercentage>
          </ServiceTxt>

          <ServiceTxt>
            <ServiceTitle>FREE DELIEVERY</ServiceTitle>
            <ServicePercentage>95%</ServicePercentage>
          </ServiceTxt>

          <ServiceTxt>
            <ServiceTitle>FREE PARKING</ServiceTitle>
            <ServicePercentage>95%</ServicePercentage>
          </ServiceTxt>
        </Service>
      </ServiceItem>
    </ServiceFeatureWrapperDiv>
  );
};

export default ServiceFeature;

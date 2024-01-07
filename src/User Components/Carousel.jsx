import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import backgroundOne from '../Media/backgroundone.jpg'
import backgroundTwo from '../Media/backgroundTwo.jpg'
import backgroundThree from '../Media/backgroundThree.mp4'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const StyledSwiperSlide = styled(SwiperSlide)`
   background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;


const Carousel = () => {
  return (
    <>
       <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        Autoplay={true}
     
        scrollbar={{ draggable: true }}

    >
      <StyledSwiperSlide backgroundImage={backgroundOne}>
    1
      </StyledSwiperSlide>

       <StyledSwiperSlide backgroundImage={backgroundTwo}>
       2
      </StyledSwiperSlide>
 
      <StyledSwiperSlide>
    
      <video autoPlay loop muted playsInline src={backgroundThree} />
       
    
      </StyledSwiperSlide>


    </Swiper>
    </>
  )
}

export default Carousel
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const ChefsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F7F7;
`

const ChefsTxtDiv = styled.div`

 display: flex; 
 flex-direction: column;
 align-items: center;
 max-width: 1600px;
   margin: auto;
    
 @media (min-width: 600px) {
   

}
   
`
const TxtOne = styled.h4`
 text-align: center;
 padding-top: 5rem;

`

const TextTwo = styled.h2`
margin-top: 3rem;
font-size: 4em;
text-align: center;
@media (max-width: 600px) {

    font-size: 2.5rem;

  }


`

const TextThree = styled.p`
margin-top: 7rem;
margin-bottom: 2rem;
font-size: 1.5rem;
padding: 0 4rem;
color: #6b6b6b;
font-weight: bolder;
   @media (max-width: 600px) {
    padding: 2rem;

  }
`






const ChefsCarousel = styled.div`
 
   background-color: #F7F7F7;
   width: 100%;
   margin: auto;
   padding: 0 1rem;
   @media (min-width: 1200px) {
    
  padding: 0 4rem;
  }
`

const StyledSwiper = styled(Swiper)`
`

// use background image and prop instead of using img element
const StyledSwiperSlide = styled(SwiperSlide)`
height: 100vh;
position: relative;
`

const CrouselImg = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const ChefsNameDiv = styled.div`
position: absolute;
left: 0;
bottom: 0;
top: 85%;
right: 50%;
background-color: #F7F7F7;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.3rem;


`



const ChefsName = styled.p`
font-weight: ${props => props.fontweight};
`


const Chefs = () => {
const [windowWith, setWindowWith] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", (event) => {
            setWindowWith(window.innerWidth);
        });
    })
    
// console.log(windowWith);



// Function make the slide show responsive
function getSlidesPerView() {
    if (windowWith < 1200) {
        return 1; 
    } else if (windowWith < 1300) {
        return 2; 
    } else {
        return 3; 
    }
}
    
  return (
    <ChefsWrapper>
        <ChefsTxtDiv>
            
        <TxtOne>
02. MEET THE TEAM
</TxtOne>
<TextTwo>The Best Chefs</TextTwo>

<TextThree>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextThree>

        </ChefsTxtDiv>

        <ChefsCarousel>
        <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={getSlidesPerView()}
        speed={2000}
        autoplay={{delay: 1000}}
        // autoplay={{delay: 3000}}

        
        // onSlideChange={handleSlideChange}
    >
     
   {/* use background image and prop instead of using img element */}
      <StyledSwiperSlide>
        <CrouselImg src='https://source.unsplash.com/random/?dark'/>
        <ChefsNameDiv>
            <ChefsName fontweight={'bold'}>C. EastWood</ChefsName>
            <ChefsName>Chief Photographer</ChefsName>
     
        </ChefsNameDiv>
         </StyledSwiperSlide>

       <StyledSwiperSlide>
       <CrouselImg src='https://source.unsplash.com/random/?dark?nature'/>
       <ChefsNameDiv>
            <ChefsName fontweight={'bold'}>C. EastWood</ChefsName>
            <ChefsName>Chief Photographer</ChefsName>
     
        </ChefsNameDiv>
         </StyledSwiperSlide>
 
      <StyledSwiperSlide>
      <CrouselImg src='https://source.unsplash.com/random/?dark?ship'/>
      <ChefsNameDiv>
            <ChefsName fontweight={'bold'}>C. EastWood</ChefsName>
            <ChefsName>Chief Photographer</ChefsName>
     
        </ChefsNameDiv>
          </StyledSwiperSlide>

          <StyledSwiperSlide>
      <CrouselImg src='https://source.unsplash.com/random/?dark?ship'/>
      <ChefsNameDiv>
            <ChefsName fontweight={'bold'}>C. EastWood</ChefsName>
            <ChefsName>Chief Photographer</ChefsName>
     
        </ChefsNameDiv>
          </StyledSwiperSlide>

          <StyledSwiperSlide>
      <CrouselImg src='https://source.unsplash.com/random/?dark?ship'/>
      <ChefsNameDiv>
            <ChefsName fontweight={'bold'}>C. EastWood</ChefsName>
            <ChefsName>Chief Photographer</ChefsName>
     
        </ChefsNameDiv>
          </StyledSwiperSlide>


    </StyledSwiper>
        </ChefsCarousel>
    </ChefsWrapper>
  )
}

export default Chefs
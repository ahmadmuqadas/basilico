import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import facebookICon from '../Media/facebook-app-symbol.png'
import twitterIcon from '../Media/twitter.png'
import PintrestIcon from '../Media/pinterest.png'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const ChefsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  width: 95%;
  margin: auto;
`;

const ChefsTxtDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  margin: auto;

  @media (min-width: 600px) {
  }
`;
const TxtOne = styled.h4`
  text-align: center;
  padding-top: 5rem;
`;

const TextTwo = styled.h2`
  margin-top: 3rem;
  font-size: 4em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

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
`;

const ChefsCarousel = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
  margin-top: 4rem;
  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;

const StyledSwiper = styled(Swiper)``;

// use background image and prop instead of using img element
const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100vh;
  position: relative;
`;

const CrouselImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const ChefsNameDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 90%;
  right: 50%;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.3rem;
  z-index: 2;
`;

const ChefsName = styled.p`
  font-weight: ${(props) => props.fontweight};
`;


const ChefsSocialDiv = styled.div`
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 1;
  opacity: 0;
background-color: white;
  transition: opacity ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    opacity: 0.9;

  }

  &:hover > div {
    margin-top: 0;
    opacity: 1;
  }
`;

const SocialIconDiv = styled.div`
   width: 3rem;
  height: 3rem;
  border-radius: 100vmax;
  border: solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:first-child{
    margin-top: -15rem;
  }
  &:nth-child(2){
    margin-top: -8rem;
  }

  &:last-child{
    margin-top: -4rem;
  
  }
`




const SocialIcon = styled.img`
  background-color: black;
  height: 50%;
  width: 50%;
  
`


const chefsData = [
  {
    name: 'c. east woord',
    role: 'chief photographer',
    fbProfile: 'https://www.facebook.com/',
    twitterProfile: 'https://www.facebook.com/',
    pinterestProfile: 'https://www.pinterest.com/',
    chefImage: 'https://source.unsplash.com/random/?dark'
    
  },

  {
    name: 'r. redford',
    role: 'assistant photographer',
    fbProfile: 'https://www.facebook.com/',
    twitterProfile: 'https://www.facebook.com/',
    pinterestProfile: 'https://www.pinterest.com/',
    chefImage: 'https://source.unsplash.com/random/?dark'
    
  },


  {
    name: 'm. scorsese',
    role: 'Advertising photographer',
    fbProfile: 'https://www.facebook.com/',
    twitterProfile: 'https://www.facebook.com/',
    pinterestProfile: 'https://www.pinterest.com/',
    chefImage: 'https://source.unsplash.com/random/?dark'
    
  },


  {
    name: 'W. kar-wai',
    role: 'editorial photographer',
    fbProfile: 'https://www.facebook.com/',
    twitterProfile: 'https://www.facebook.com/',
    pinterestProfile: 'https://www.pinterest.com/',
    chefImage: 'https://source.unsplash.com/random/?dark'
    
  },

  


  {
    name: 'm. gibson',
    role: 'coporate photographer',
    fbProfile: 'https://www.facebook.com/',
    twitterProfile: 'https://www.facebook.com/',
    pinterestProfile: 'https://www.pinterest.com/',
    chefImage: 'https://source.unsplash.com/random/?dark'
    
  },

]

const renderChefData = chefsData.map((ele) => {
  return (
    <StyledSwiperSlide>
    <CrouselImg src={ele.chefImage} />
    <ChefsNameDiv>
      <ChefsName fontweight={"bold"}>{ele.name}</ChefsName>
      <ChefsName>{ele.role}</ChefsName>
    </ChefsNameDiv>
    <ChefsSocialDiv>
      <SocialIconDiv>
      <SocialIcon src={facebookICon} alt="facebook Icon" />
      </SocialIconDiv>
      <SocialIconDiv>
      <SocialIcon src={twitterIcon} alt="facebook Icon" />
      </SocialIconDiv>
      <SocialIconDiv>
      <SocialIcon src={PintrestIcon} alt="facebook Icon" />
      </SocialIconDiv>
   
    </ChefsSocialDiv>
  </StyledSwiperSlide>
  )
})

const Chefs = () => {
  const [windowWith, setWindowWith] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWindowWith(window.innerWidth);
    });
  });

  // console.log(windowWith);

  // Function make the slide show responsive
  function getSlidesPerView() {
    if (windowWith < 1200) {
      return 1;
    } else if (windowWith < 1250) {
      return 2;
    } else {
      return 3;
    }
  }

  return (
    <ChefsWrapper>
      <ChefsTxtDiv>
        <TxtOne>02. MEET THE TEAM</TxtOne>
        <TextTwo>The Best Chefs</TextTwo>

        <TextThree>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </TextThree>
      </ChefsTxtDiv>

      <ChefsCarousel>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={25}
          slidesPerView={getSlidesPerView()}
          speed={2000}
          autoplay={{ delay: 1000 }}
          // autoplay={{delay: 3000}}

          // onSlideChange={handleSlideChange}
        >
         {renderChefData}
                 </StyledSwiper>
      </ChefsCarousel>
    </ChefsWrapper>
  );
};

export default Chefs;


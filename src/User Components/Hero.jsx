import React from 'react'
import './StyledComponents/wave.css'
import styled from 'styled-components'
import Wave from './Wave'
import Carousel from './Carousel'
const Hero = () => {

  const HeroDiv = styled.div`
    height:100vh; 
    position: relative;

  `
  
  return (
    <HeroDiv>
<Carousel/>
<Wave/>
    </HeroDiv>
  )
}

export default Hero
import React from 'react'
import './StyledComponents/wave.css'
import styled from 'styled-components'
import Wave from './Wave'
const Hero = () => {

  const HeroDiv = styled.div`
    height:100vh; 
    background-color: black;
    position: relative;

  `
  
  return (
    <HeroDiv>

<Wave/>
    </HeroDiv>
  )
}

export default Hero
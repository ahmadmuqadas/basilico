import React from 'react'
import styled from 'styled-components'

const CarouselDiv = styled.div`
display: flex;

padding: 0 1rem;
align-items: center;
background-color: red;
position: absolute;
left: 0;
right: 0;
top: 2;
z-index: 109;
    
`
const CarouselUl = styled.ul`
    display: flex;
    align-items: center;
`


const CarouselLi = styled.li`
    
`

const CrouselNav = () => {
  return (
    <CarouselDiv>
        <CarouselUl>

            <CarouselLi>HOME</CarouselLi>
            <CarouselLi>ABOUT</CarouselLi>
            <CarouselLi>SERVICE</CarouselLi>
            <CarouselLi>MENU</CarouselLi>
            <CarouselLi>INSIDE</CarouselLi>
            <CarouselLi>NEWS</CarouselLi>
            <CarouselLi>CONTACT</CarouselLi>

        </CarouselUl>
    </CarouselDiv>
  )
}

export default CrouselNav
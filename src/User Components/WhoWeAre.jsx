import React from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
padding-top: 5rem;
padding-left: 2rem;
padding-right: 2rem;
position: relative;



`;

const PhotosDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.2;
    @media (max-width: 1200px) {
 display:none;

  }
`;

const PhotoContainerDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


`;

const PhotoDiv = styled.div`

height: 13rem;
margin: 1rem;
width: ${props => props.widthSize}; 
border-radius: 15px;
border-top-left-radius: ${props => props.borderNone};
border-bottom-left-radius: ${props => props.borderNone};
overflow: hidden;
`;

const PhotoItemOneDiv = styled.div`
display: flex;
flex-direction: column;
/* gap: 1rem; */

`;

const PhotoItemTwoDiv = styled.div``;

const PhotoItemThreeDiv = styled.div``;

const PhotosImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`

const WhoWeAreElements = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
   right: 0;
   display: grid;
   max-width: 1600px;
   margin: auto;
 
   grid-template-columns: 1fr 1fr 1fr 1fr;
   @media (max-width: 1200px) {
    position: static;
    display: flex;
    flex-direction: column;


  }
`

const TextItem = styled.div`
    grid-column: ${props => props.gridCol};
    display: flex;
    flex-direction:column;
    justify-content: ${props => props.justifyContent};
    text-align: center;
    align-items: ${props => props.alignItems};
    
    @media (max-width: 1200px) {
    

  }

`
const TxtOne = styled.h4`
   /* @media (max-width: 1200px) {
 margin-top: 4rem;

  } */

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
font-size: 1.5rem;
padding: 0 4rem;
color: #6b6b6b;
font-weight: bolder;
   @media (max-width: 600px) {
    padding: 0;

  }
`

const TextFour = styled.h4`
padding: 0 4rem;
margin-bottom: 3rem; 
font-size: 1.4rem;
 @media (max-width: 1200px) {
 margin-top: 2rem;


  }

  @media (max-width: 600px) {
 margin-top: 2rem;
 padding: 0;

  }
`

const TextFive = styled.p`
padding: 0 4rem;
line-height: 1.5rem;
font-size: 1.5;
@media (max-width: 1200px) {
 margin-top: 4rem;
 padding: 1;


  }

  @media (max-width: 600px) {
 margin-top: 4rem;
 padding: 0;

  }
`



const WhoWeAre = () => {
  return (
    <WrapperDiv>
        <WhoWeAreElements>
          <TextItem justifyContent={'center'} alignItems={'center'} gridCol={'1/5'}>
           <TxtOne>01.WHO WE ARE</TxtOne>
<TextTwo>The Restaurant</TextTwo>
<TextThree>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextThree>
          </TextItem>
          <TextItem gridCol={'1/3'} justifyContent={'center'} >
            <TextFour>BRAND MISSION</TextFour>
<TextFive>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextFive>
          </TextItem>
          <TextItem gridCol={'3/6'} justifyContent={'center'}>
          <TextFour>BRAND MISSION</TextFour>
<TextFive>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextFive>
          </TextItem>
        </WhoWeAreElements>
        <PhotosDiv>
            <PhotoContainerDiv>
                <PhotoItemOneDiv>
                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                </PhotoItemOneDiv>

                <PhotoItemTwoDiv>
                <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
               
                </PhotoItemTwoDiv>

                <PhotoItemThreeDiv>
                <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                </PhotoItemThreeDiv>
               
            </PhotoContainerDiv>
            <PhotoContainerDiv>

            <PhotoItemOneDiv>
            <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                
                </PhotoItemOneDiv>

                <PhotoItemTwoDiv>
                <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv widthSize={'10rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
               
                </PhotoItemTwoDiv>

                <PhotoItemThreeDiv>

                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>
                <PhotoDiv borderNone={0} widthSize={'6rem'}><PhotosImg src='https://source.unsplash.com/random/800x600
'/></PhotoDiv>


                </PhotoItemThreeDiv>
            
            </PhotoContainerDiv>
        </PhotosDiv>

    </WrapperDiv>
  )
}

export default WhoWeAre
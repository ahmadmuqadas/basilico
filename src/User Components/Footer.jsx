import React from "react";
import styled from "styled-components";


const FooterWrapper = styled.div`
min-height: 50dvh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;


@media (min-width: 700px) {
    min-height: 60dvh;
}


`


const LogoDiv = styled.div`
padding-top: 10rem;
`


const SocialDiv = styled.div`
display: flex;
gap: 1rem;
flex-direction: column;


@media (min-width: 700px) {
    flex-direction: row;
}


`

const RightsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
text-align: center;
padding-bottom: 2rem;



`

const SocialBtns = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
transition: ease-in-out .2s;

&:hover {
  color: #E5C27B;
}
`

const LogoP = styled.p`
  font-size: 3.5rem;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const Footer = () => {
  return (
    <FooterWrapper>
      <LogoDiv>
        <LogoP>BO</LogoP>
      </LogoDiv>
      <SocialDiv>
        <SocialBtns>TWITTER</SocialBtns>
        <SocialBtns>FACEBOOK</SocialBtns>
        <SocialBtns>INSTAGRAM</SocialBtns>
      </SocialDiv>
      <RightsDiv>
      <p>© ALL RIGHTS RESERVED.</p>
      <p>DEVELOPED BY AHMAD MUQADAS</p>
      </RightsDiv>
    </FooterWrapper>
  );
};

export default Footer;

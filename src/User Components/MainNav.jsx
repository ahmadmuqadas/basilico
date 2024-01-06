import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1;
  
`
const StaticNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0rem 1rem;
  background-color: ${props => props.scrollPosition > 52 ? '#f2f3f5' : ''};
`
const NavUl = styled.ul`
display: flex;
flex-direction: column;
padding-top: 1rem;
left: ${props => props.scrollPosition > 52 ? '0' : '1rem'};
right: ${props => props.scrollPosition > 52 ? '0' : '1rem'};
list-style-type: none;
position: absolute;
top: 100%;
max-height: ${props => props.isToggleOpen ? '50rem' : '0'};
padding: ${props => props.isToggleOpen ? '' : '0'};
  overflow: hidden;
  transition: all ease 0.5s;
  background-color: #f2f3f5;
`
const NavLi = styled.li`
padding-left: 1rem;
padding-top: .6rem;
padding-bottom: 0.6rem;
font-size: .8rem;
font-weight: 600;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  
`
const LogoP = styled.p`
  font-size: 2.5rem;
  color: ${props => props.scrollPosition > 52 ? 'black' : '#f2f3f5'};

`


const MenuIcon = styled.div`
    cursor: pointer;
    width: 30px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ status }) => status === 'arrow' && css`
        div:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        div:nth-child(2) { opacity: 0; }
        div:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    `}
`;

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props => props.scrollPosition > 52 ? 'black' : '#f2f3f5'};;
    transition: all 0.3s ease;
`;








const MainNav = () => {
  const [toggle, setToggle] = useState(false);
  const [menuStatus, setMenuStatus] = useState('hamburger'); // 'hamburger', 'cross', 'arrow'
  const [scrollPosition, setScrollPosition] = useState(0);


  const toggleMenu = () => {
    setMenuStatus(menuStatus === 'hamburger' ? 'arrow' : 'hamburger');
    setToggle(prev => !prev)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};




  
  return (

    
   <StyledHeader>
 <StaticNav scrollPosition={scrollPosition}>
<LogoP scrollPosition={scrollPosition}>LOGO</LogoP>
<MenuIcon status={menuStatus} onClick={toggleMenu}>
            <Line scrollPosition={scrollPosition} className="line" />
            <Line scrollPosition={scrollPosition} className="line" />
            <Line scrollPosition={scrollPosition} className="line" />
        </MenuIcon>
<NavUl scrollPosition={scrollPosition} isToggleOpen={toggle}>
  <NavLi>HOME</NavLi>
  <NavLi>ABOUT</NavLi>
  <NavLi>SERVICES</NavLi>
  <NavLi>MENU</NavLi>
  <NavLi>INSIDE</NavLi>
  <NavLi>INSIDE</NavLi>
  <NavLi>CONTACT</NavLi>
</NavUl>
 </StaticNav>
   </StyledHeader>
  )
}

export default MainNav
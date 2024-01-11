import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const YearWrapperDiv = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
`
const YearsDiv = styled.div`
    background-color: ${props => props.bgColor};
    flex-grow: 1;
`


const YearsNumber = styled.div`
    height: 25rem;
    width: 25rem;
    border: solid white 2rem;
    border-radius: 100vmax;
    position: absolute;
    background-color: #F7F7F7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 3rem 0;
    /* transform: translate(-50% -50%); */
`

const YearsNumTxt = styled.p`
    font-size: 6rem;
    font-weight: bolder;
`
const YearsTxtHeader = styled.p`

`

const Years = () => {

    const [numberIncrease, setNumberIncrease] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        const position = window.pageYOffset;
       
    
        if (position > 1000 && !intervalId) {
          const newIntervalId = setInterval(() => {
            setNumberIncrease(prevNumber => {
              if (prevNumber >= 76) {
                clearInterval(newIntervalId);
                setIntervalId(null); // Reset the intervalId
                return prevNumber;
              }
              return prevNumber + 1;
            });
          }, 100);
    
          setIntervalId(newIntervalId);
        }
    
        }
       
  return (
    <YearWrapperDiv>
<YearsNumber>
    <YearsTxtHeader>BEING AROUND FOR</YearsTxtHeader>
    <YearsNumTxt>{numberIncrease}</YearsNumTxt>
    <yearsTxtHeader>YEARS</yearsTxtHeader>
</YearsNumber>
        <YearsDiv></YearsDiv>
        <YearsDiv bgColor={'#F7F7F7'}></YearsDiv>

    </YearWrapperDiv>
  )
}

export default Years
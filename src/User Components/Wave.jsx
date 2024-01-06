import React from 'react'
import './StyledComponents/wave.css'

const Wave = () => {
  return (
    <div className='wave-wrap' style={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        position: 'absolute',
        right: "0",
        left: "0",
        top: '0',
        bottom: '0'
         
     }}> 
             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                 <defs>
                     <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                 </defs>
                 <g className="wavies">
                     <use xlinkHref="#gentle-wave" x="10" y="0" fill="#ffffffae"/>
                     <use xlinkHref="#gentle-wave" x="15" y="1" fill="#e5e5e5ae"/>
                     <use xlinkHref="#gentle-wave" x="20" y="1" fill="#ffffffc4"/>
                     <use xlinkHref="#gentle-wave" x="25" y="3" fill="white"/>  
                 </g>
             </svg>
         </div>
  )
}

export default Wave
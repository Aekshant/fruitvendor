import React from 'react'
import "./LandingPageCard.css"

export const LandingPageCard = ( props ) => {
  return (
    <div className='LandingPageCard'>
    <div style={ { width : "100%", height: "100%" , marginRight: "4rem" } }>
      <img src={ props.src } alt="Alps" style={{ width : "20rem", marginBottom: '2%', borderRadius: "19px", height: "70%"}}/>
      <div>
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.1rem" }} >{ props.title }</p>
        <p>{ props.description }</p>
      </div>
    </div>
  </div>
  )
}
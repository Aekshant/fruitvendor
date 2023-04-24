import React from 'react'
import "./DownloadApp.css"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { IconContext } from "react-icons"

export const DownloadApp = ( props ) => {
  return (
    <div className='downloadApp'>
      <div style={ {  } }>
      <IconContext.Provider value={{ size: '3rem', }}>
         { props.device == "apple" ? <AiFillApple/> : <AiFillAndroid/> } 
      </IconContext.Provider>
      </div>
      <div className='downloadAppText'>
        <p style={{ fontSize: ".75rem" }}>{ props.device == "apple" ? "Download on the" : "GET IT ON" } </p>
        <p style={{ fontWeight : "bold" }}>{ props.device == "apple" ? "App Store" : "Google Play" }</p>
      </div>
    </div>
  )
}

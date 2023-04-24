import React from 'react'
import "./LandingPage.css"
import JointSerachBar from './tools/JointSerachBar'
import LandingNavBar from './assets/LandingNavBar'

export const LandingPage = () => {
    const myStyle={
                backgroundImage:`url(${process.env.PUBLIC_URL+ "/landing.jpg"})`,
                backgroundSize: "100%",
                backgroundRepeat: 'no-repeat',
                height: window.innerHeight* 4.1/100 + "rem",
                objectFit: "cover",
                backgroundPosition: "center",
                position : "relative"
            };
  return (
    <div className='LandingPage' style={ myStyle }>
        <div className='landingTransparent' />
        <div style={{ top : "5%", position:"absolute", width: "100%" }}>
          <LandingNavBar/>
          <div className='landingTransparent-main'>
            <p style={{ color:"#FDF6FA", fontSize:"7rem", height:"8rem", fontWeight:"bolder", marginTop: "2%" }}>A Vendor's</p>
            <p style={{ color:"#FDF6FA", fontSize:".9rem", fontWeight:"bold", marginLeft:"41.3%" }} > - Efforts To Make A Junction To A Alley Vendors</p>
          </div>
        </div>

        <div style={{ width: "100%", top : 0, position:"absolute", marginLeft: "24%", marginTop: "22%" }}>
              <JointSerachBar/>
        </div>
    </div>
  )
}

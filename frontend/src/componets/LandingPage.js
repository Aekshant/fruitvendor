import React, { useState } from 'react'
import "./LandingPage.css"
import JointSerachBar from './tools/JointSerachBar'
import LandingNavBar from './assets/LandingNavBar'
import { LandingPageCard } from './tools/LandingPageCard'
import { InlineContainer } from "./tools/InlineContainer"
import { Footer } from "./assets/Footer"
import { GetApp } from "./assets/GetApp"
import { PhoneNumber } from "./tools/PhoneNumber"
import { OrLineContainer } from "../componets/tools/orLine"
import { ContinueEmail } from "./tools/ContinueEmail"
import { CgClose } from "react-icons/cg"

export const LandingPage = () => {
    const [ transparent, setTransparent ] = useState( false )

    const myStyle={
      backgroundImage:`url(${process.env.PUBLIC_URL+ "/landing.jpg"})`,
      backgroundSize: "100%",
      backgroundRepeat: 'no-repeat',
      height: window.innerHeight* 4.1/100 + "rem",
      objectFit: "cover",
      backgroundPosition: "center",
      position : "relative",
      filter: transparent ? "blur(2px)" : null 
    };
    const handleTransparent = ( data ) => {
      setTransparent( data )
    }
  return (
    <>
      <div style={{ overflow:"hidden", display: ( transparent ? "flex" : "none" ), justifyContent: "center", zIndex : 1, position : "relative", marginTop : "auto" }}>
            <div style={{ top : "10%", position:"fixed", width: "30rem",height: "27rem", backgroundColor: "whitesmoke", borderRadius: ".8rem"}}>
                <div style={ { display: "flex", justifyContent:"space-between", margin: "1rem" }}>
                  <h2 style={{ color: "GrayText", textAlign: "start" }}>Login</h2>
                  <div style={{ margin : ".3rem", cursor: "pointer" }} onClick={ ( ) => { handleTransparent( false ) } }>  <CgClose/> </div>                 
                </div>
                
                <div style={{ display: "flex", flexDirection : "column", alignItems: "center" }}>
                  <PhoneNumber/>
                  <div style={{  width : "80%", backgroundColor : "#E64848", height : "3rem", borderRadius : "3px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "7%" }}>
                    <span style={{ color: "white" }}>Send One Time Password</span>
                  </div>
                  <OrLineContainer/>
                  <ContinueEmail />
                  <hr style={{ width: "92%", color: "grey" }}/>
                  <div>
                    <span  style={{ fontSize: "1.04rem", color: "GrayText" }}>New to Vendor? <span style={{ color: "#E64848" }}>Create account</span></span>
                  </div>
                </div>
            </div>
      </div>

      <div className='LandingPage' style={ myStyle }>
          <div className='landingTransparent' />
          <div style={{ top : "5%", position:"absolute", width: "100%" }}>
            <LandingNavBar onTransparent={ handleTransparent }/>
            <div className='landingTransparent-main'>
              <p style={{ color:"#FDF6FA", fontSize:"7rem", height:"8rem", fontWeight:"bolder", marginTop: "2%" }}>A Vendor's</p>
              <p style={{ color:"#FDF6FA", fontSize:".9rem", fontWeight:"bold", marginLeft:"41.3%" }} > - Efforts To Make A Junction To A Alley Vendors</p>
            </div>
          </div>

          <div style={{ width: "100%", top : 0, position:"absolute", marginLeft: "24%", marginTop: "22%" }}>
                <JointSerachBar/>
          </div>
          <InlineContainer style={{ marginLeft : "auto", marginRight: "auto", marginTop: "3%", width: "100%", justifyContent: "center", marginBottom : "5%" }}>
            <LandingPageCard title="Order Online" description="Stay home and order to your doorstep" src="./cardFruit.jpg"/>
            <LandingPageCard title="Walk In" description="View City's nearby stores" src="./walkIn.jpg" />
            <LandingPageCard title="Find Stores" description="Explore the city's top alley vendors" src="./find.jpg" />
          </InlineContainer>
          <GetApp/>
          <Footer/>
      </div>
    </>
  )
}
//Order Online, Walk in ,Location Filter
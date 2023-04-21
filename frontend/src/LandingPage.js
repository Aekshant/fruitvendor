import React from 'react'
import "./LandingPage.css"
import { InputBoxIcon } from "./componets/tools/InputBoxIcon"
import { InlineContainer } from "./componets/tools/InlineContainer"
import SelectBox from './componets/tools/SelectBox'

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
        <div className='landingTransparent'></div>
        <div style={{ top : 0, position:"absolute", width: "100%"}}>
          <div className='landingNavBar' style={{ fontSize: "1.4rem" }}>
            <span style={{ marginLeft: "68%" }}>Add Store</span>
            <span>Log In </span>
            <span>Sign Up</span>
          </div>

           <div className='landingTransparent-main'>
            <p style={{ color:"#FDF6FA", fontSize:"7rem", height:"8rem", fontWeight:"bolder"}}>A Vendor's</p>
            <p style={{ color:"#FDF6FA", fontSize:".9rem", fontWeight:"bold", marginLeft:"41.3%" }} > - Efforts To Make A Junction To A Alley Vendors</p>
           </div>{/* main ends */}
        </div>

        <div style={{ width: "100%", marginTop: "15%", top : 0, position:"absolute", marginLeft: "24%", marginTop: "20%" }}>
              <InlineContainer>
                <SelectBox name="search" options={[ { value: "a1", name: "A1"  } ]}/>
                <div style={{ backgroundColor:"white", color:"grey", paddingTop:".5%", fontSize: "1.1rem" }}>|</div>
                <InputBoxIcon />
              </InlineContainer>
        </div>
    </div>
  )
}


import React from 'react'
import BlurBox from "../tools/BlurBox"
import { PhoneNumber } from "../tools/PhoneNumber"
import { OrLineContainer } from "../tools/orLine"
import { ContinueEmail } from "../tools/ContinueEmail"
import { CgClose } from "react-icons/cg"

const LogIn = ( props ) => {
  const blurBoxStyle = {
    top : "10%",
    position:"fixed", 
    width: "30rem",
    height: "27rem", 
    backgroundColor: "whitesmoke", 
    borderRadius: ".8rem"
  }
  return (
    <BlurBox transparent={ props.activestate } style={ blurBoxStyle }>
        <div style={ { display: "flex", justifyContent:"space-between", margin: "1rem" }}>
          <h2 style={{ color: "GrayText", textAlign: "start" }}>Login</h2>
          <div style={{ margin : ".3rem", cursor: "pointer" }} onClick={ ( ) => { props.handlestate( false ) } }>  <CgClose/> </div>                 
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
            <span style={{ fontSize: "1.04rem", color: "GrayText" }}>New to Vendor? <span style={{ color: "#E64848" }}>Create account</span></span>
          </div>
        </div>
      </BlurBox>
  )
}
export default LogIn;
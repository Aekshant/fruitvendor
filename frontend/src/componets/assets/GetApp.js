import React, { useState } from 'react'
import "./GetApp.css"
import { InlineContainer } from '../tools/InlineContainer'
import { RadioButton } from "../tools/RadioButton"
import { InputBox } from "../tools/InputBox"
import { DownloadApp } from "./DownloadApp"

export const GetApp = () => {
  const [ checkedWay, setChecked ] = useState( "email" )
  const handleCheck = ( data ) => {
    if( typeof data === "string" ) setChecked( data )
  }
  return (
    <InlineContainer style={{ justifyContent: "center" }}>
        <img src='./getApp.avif' width="30%"/>
        <div style={{ textAlign: "start" }}>
            <h3 style={{ marginBottom: "5%"  }}>Get the Vendor's app</h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "5%"  }}>We will send you a link, open it on your phone to download the app</p>
            <InlineContainer style={{ marginBottom: "5%" }}>
                <RadioButton name="Email" value="email" style={ { marginRight: "6%" } } checked={ checkedWay == "email" } onChange={ handleCheck } />
                <RadioButton name="WhatsApp" value="whatsApp" checked={ checkedWay == "whatsApp" } onChange={ handleCheck }/>
            </InlineContainer>
            <InputBox name="Share App Link" style={{ marginBottom: "5%" }} placeholder = { checkedWay == "email" ? "Enter Email Address" : "Enter What's App Number" } />
            <h5 style={ { color : 'grey', marginBottom: "5%" } }>Download App from</h5>
            <div style={{ display: "flex", justifyContent: "space-between", marginRight : "10%" }}>
              <DownloadApp/>
              <DownloadApp device="apple"/>
            </div>
        </div>
    </InlineContainer>
  )
}
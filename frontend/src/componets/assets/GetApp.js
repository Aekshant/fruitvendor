import React, { useState } from 'react'
import "./GetApp.css"
import { InlineContainer } from '../tools/InlineContainer'
import { RadioButton } from "../tools/RadioButton"
import { InputBox } from "../tools/InputBox"
import { DownloadApp } from "./DownloadApp"

export const GetApp = () => {
  const [ checkedList, setChecked ] = useState( { email : false, whatsApp: false } )
  const handleCheck = ( data ) => {
    console.log(data);
    // const stateData = checkedList
    // stateData[ data ] = ( data == "email" ? true : false )
    // stateData[ data ] = ( data == "whatsApp" ? true : false )
    // // console.log(stateData);
    // setChecked( stateData )
  }
  return (
    <InlineContainer style={{ justifyContent: "center" }}>
        <img src='./getApp.avif' width="30%"/>
        <div style={{ textAlign: "start" }}>
            <h3 style={{ marginBottom: "5%"  }}>Get the Vendor's app</h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "5%"  }}>We will send you a link, open it on your phone to download the app</p>
            <InlineContainer style={{ marginBottom: "5%" }}>
                <RadioButton name="Email" value="email" style={ { marginRight: "6%" } } checked={ checkedList.email } onChange={ handleCheck } />
                <RadioButton name="WhatsApp" value="whatsApp" checked={ checkedList.whatsApp } onChange={ handleCheck }/>
            </InlineContainer>
            <InputBox name="Share App Link" style={{ marginBottom: "5%" }}/>
            <h5 style={ { color : 'grey', marginBottom: "5%" } }>Download App from</h5>
            <div style={{ display: "flex", justifyContent: "space-between", marginRight : "10%" }}>
              <DownloadApp/>
              <DownloadApp device="apple"/>
            </div>
        </div>
    </InlineContainer>
  )
}
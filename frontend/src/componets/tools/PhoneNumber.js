import React from 'react'
import { InlineContainer } from "../tools/InlineContainer"

export const PhoneNumber = () => {
  return (
    <InlineContainer style={{ border: "25px",  width : "80%", boxShadow : "0 0 1rem #ccc", backgroundColor: "white", justifyContent: "center" }}>
        <input type="search" style={{ width : "20%", outline: "0", border: "0", padding: ".5rem", backgroundColor: "white", paddingRight: "0" }} value="+ 91" disabled/>
        <div style={{ color: "grey", fontSize: "1.2rem", backgroundColor: "white", paddingTop: ".2rem" }}>|
            <input type="search" placeholder='Phone' style={{ border: "0", outline: "0", margin: "0", backgroundColor: "white", marginLeft : "1rem", padding: ".1rem" }}/>
        </div>
    </InlineContainer >
  )
}

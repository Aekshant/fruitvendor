import React from 'react'
import { MdOutlineMail } from "react-icons/md"
import { IconContext } from "react-icons"

export const ContinueEmail = () => {
  return (
    <div style={{  width : "80%", boxShadow : "0 0 1rem #ccc", backgroundColor : "white", height : "3rem", borderRadius : "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconContext.Provider value={ { size : "1.5rem", color: "#E64848" } }>
            <MdOutlineMail/>
        </IconContext.Provider>
        <span style={{ color: "grey", marginLeft: "2%" }}>Continue With Mail</span>
    </div>
  )
}

import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { IconContext } from "react-icons"
import { InlineContainer } from "../tools/InlineContainer"
import "./InputBoxIcon.css"

export const InputBoxIcon = ( props ) => {
  return (
    <div style={{ width: "40%", alignItems: "center" }}>
      { props.title ? <label for={ props.name }>{props.title}</label> : null }
      <InlineContainer style={{ flexWrap: "unset", backgroundColor: "white", padding : ".5rem", borderRadius: "0 .8rem .8rem 0" }}>
        <IconContext.Provider value={{ color: 'black', size: '1.8rem' }}>
          <CiSearch/>
        </IconContext.Provider>
        <input type="search" className="inputIconBox" placeholder='Search for fruits or veggies' style={{ border: "0", width: "85%", marginTop: "0", marginLeft: ".5rem" }} />
      </InlineContainer>
    </div>
  )
}

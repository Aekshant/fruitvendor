import React from 'react'
import "./SelectBox.css"
import { InlineContainer } from "../tools/InlineContainer"

const SelectBox = ( props ) => {
  return (
    <div style={{ width: "13%", alignItems: "center" }}>
      { props.title ? <label for={ props.name }>{props.title}</label> : null }
      <InlineContainer style={{ flexWrap: "unset", backgroundColor: "white", padding : ".5rem", borderRadius: ".8rem 0 0 .8rem" }}>
        <img src='./gps.png' width="18%" alt='gps'/>
        <select name={ props.name } id={ props.name } className='inputIconBox' style={{ border: "0", width: "92%", marginLeft: "1%" }}>
          <option selected="selected" disabled >Maharashtra</option>
          { Array.isArray( props.options ) ? props.options.map( option => <option value= { option.value } >{ option.name }</option> ) : null }
        </select>
      </InlineContainer>
    </div>
  )
}

export default SelectBox
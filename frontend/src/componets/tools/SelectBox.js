import React from 'react'
import "./SelectBox.css"
import { InlineContainer } from "../tools/InlineContainer"

const SelectBox = ( props ) => {
  return (
    <div style={{ }}>
      <InlineContainer style={{ flexWrap: "unset", backgroundColor: "white", padding : ".5rem", borderRadius: ".8rem 0 0 .8rem" }}>
          <img src='./gps.png' alt='gps' width="26rem" height="1%" style={{ marginTop: "2.4%" }}/>
          <select name={ props.name } id={ props.name } className='inputIconBox' style={{ border: "0" }}>
            <option selected="selected">Maharashtra</option>
            { Array.isArray( props.options ) ? props.options.map( option => <option value= { option.value } >{ option.name }</option> ) : null }
          </select>
      </InlineContainer>
    </div>
  )
}

export default SelectBox
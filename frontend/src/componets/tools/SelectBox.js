import React from 'react'
import "./SelectBox.css"
import { InlineContainer } from "../tools/InlineContainer"

const SelectBox = ( props ) => {
  return (
    <div style={{ }}>
      <InlineContainer style={{ flexWrap: "unset", backgroundColor: "white", padding : ".5rem", borderRadius: ".8rem 0 0 .8rem" }}>
          <img src='./gps.png' alt='gps' width="26rem" height="1%" style={{ marginTop: "2.4%" }}/>
          <select name={ props.name } id={ props.name } key={ props.key } className='inputIconBox' style={{ border: "0" }} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Maharashtra</option>
            { Array.isArray( props.options ) ? props.options.map( ( option, index ) => <option key={ index } value= { option.value } >{ option.name }</option> ) : null }
          </select>
      </InlineContainer>
    </div>
  )
}

export default SelectBox
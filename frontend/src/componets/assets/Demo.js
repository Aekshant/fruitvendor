import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { InlineContainer } from "../tools/InlineContainer"

export const Demo = ( props ) => {
  
  return (
    <div>
      { props.title ? <label for={ props.name }>{props.title}</label> : null }

      <InlineContainer>
        <BiSearchAlt/>
        <select name={ props.name } id={ props.name } className='form-control rounded' style={{ borderLeftWidth: "0" }}>
          <option selected="selected"></option>
          { Array.isArray( props.options ) ? props.options.map( option => <option value= { option.value } >{ option.name }</option> ) : null }
        </select>
      </InlineContainer>

    </div>
  );
}

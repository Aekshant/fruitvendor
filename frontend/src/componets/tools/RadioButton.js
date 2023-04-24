import React from 'react'
import "./RadioButton.css"

export const RadioButton = ( props ) => {
 const data = ( ) => { 
  props.onChange( props.value ) 
}
    
  return (
    <div className='RadioButton' { ...props }>
        <input className="form-check-input" type="radio" name={ props.value } style={{ marginRight : ".35rem" }} checked={ props.checked } onChange={ data }/>
        <label className="form-check-label" htmlFor="flexRadioDefault1"> { props.name }</label>
    </div>
  )
}
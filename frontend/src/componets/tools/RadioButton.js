import React from 'react'
import "./RadioButton.css"

export const RadioButton = ( props ) => {    
  const onChecked =( e ) => {
    props.onChange( e.target.name )
  }
  return (
    <div className='RadioButton' { ...props } key={props.value}>
        <input className="form-check-input" type="radio" name={ props.value } style={{ marginRight : ".35rem", filter: "grayscale(100%)" }} checked={ props.checked } onChange={ onChecked }/>
        <label className="form-check-label" htmlFor="flexRadioDefault1"> { props.name }</label>
    </div>
  )
}
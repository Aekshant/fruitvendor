import React from 'react'
import "./RadioButton.css"

export const RadioButton = ( props ) => {
  return (
    <div className='RadioButton' { ...props }>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ marginRight : ".35rem", backgroundColor: '#D14D72',  border: "10px solid #4C6793", }}/>
        <label class="form-check-label" for="flexRadioDefault1"> { props.name }</label>
    </div>
  )
}
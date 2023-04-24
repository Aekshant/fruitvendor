import React from 'react'

export const RadioButton = ( props ) => {
  return (
    <div className='RadioButton' { ...props }>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{ marginRight : ".35rem" }}/>
        <label class="form-check-label" for="flexRadioDefault1"> { props.name }</label>
    </div>
  )
}

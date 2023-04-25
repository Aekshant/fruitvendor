import React from 'react'
import "./OnlyInput.css"
import { colors } from "./uiTools"

export const OnlyInput = ( props ) => {
  return (
    <div className='onlyInput' style={ props.containerStyle }>
      {  props.spanvalue ? <span>{ props.spanvalue }</span> : null }
      <input type="search" className="form-control rounded" aria-label="Search" aria-describedby="search-addon" {...props} />
      <span style={{ fontSize: ".7rem", color: colors.danger, fontWeight:"bold" }}>{ props.error }</span>
    </div>
  )
}
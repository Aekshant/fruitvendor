import React from 'react'
import "./CircularAvtar.css"

const CircularAvtar = ( props ) => {
  return (
    <div className="circularAvtar"  {...props}>
      <img src={ props.imagesrc } style= {props.imgstyle} />
      <span style={{ color : props.activepage ? "#D14D72" : "black" }}> { props.title }</span>
    </div>
  )
}

export default CircularAvtar
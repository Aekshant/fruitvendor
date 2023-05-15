import React from 'react'
import "./CircularAvtar.css"

const CircularAvtar = ( props ) => {
  return (
    <div className="circularAvtar"  {...props}>
      <img src={ props.imageSrc } style= {props.imgStyle} />
      <span style={{ color : props.active ? "#D14D72" : "black" }}> { props.title }</span>
    </div>
  )
}

export default CircularAvtar
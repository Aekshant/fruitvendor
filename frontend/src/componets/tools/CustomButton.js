import React from 'react'

const CustomButton = ( props ) => {
  const styleObj ={
    border: ".124rem solid grey",
    width : "7.5%",
    height : "2.15rem", 
    borderRadius : "9%", 
    alignItems : "center", 
    display: "flex", 
    justifyContent: "center", 
    marginRight : "2%", 
    cursor: "pointer"
  }
  return (
    <div style={ styleObj } onClick={ props.transparentfilter ? ()=> props.transparentfilter( true ) : null }>
        { props.icon ? <props.icon/> : null } 
        <span style={ { marginLeft : "2%", color: 'gray' } } >{ props.title }</span>
    </div>
  )
}

export default CustomButton
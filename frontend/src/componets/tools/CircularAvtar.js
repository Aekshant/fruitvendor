import React, { useEffect, useState } from 'react'
import "./CircularAvtar.css"

const CircularAvtar = ( props ) => {
  const propObj = {
    imgSrc : "./scooter.png",
    backgroundColor : "#F5F0BB",
    color : "#D14D72",
    title : "Delivery"
  }
  const [ currentProp, setProp ] = useState( propObj );

  useEffect ( ()=> {
    let obj;
    switch(  props.title ){
      case "delivery":
        obj = {
          imgSrc : "./scooter.png",
          backgroundColor : props.activepage ? "#F5F0BB" : "",
          color : props.activepage ? "#D14D72" : "black",
          title : "Delivery"
        };
        break;
      case "walkIn":
        obj = {
          imgSrc : "./walk.png",
          backgroundColor :  props.activepage ? "#A6E4E7" : "",
          color : props.activepage ? "#D14D72" : "black",
          title : "Walk In"
        };
        break;
      case "findStore":
        obj = {
          imgSrc : "./findStore.png",
          backgroundColor : props.activepage ? "#CCEABB" : "",
          color : props.activepage ? "#D14D72" : "black",
          title : "Find Store"
        };
        break;
    }
    setProp( obj );
  }, [ props.title, props.activepage ] )

  return (
    <div className="circularAvtar"  style={{ margin : "1%", marginLeft : 0, borderBottom: `.13rem solid ${currentProp.color}` }} onClick={ ()=> props.sectionHandle( props.title )  }>
      <img src={ currentProp.imgSrc } style= {{ backgroundColor : currentProp.backgroundColor }} />
      <span style={{ color: currentProp.color }}> { currentProp.title }</span>
    </div>
  )
}

export default CircularAvtar;
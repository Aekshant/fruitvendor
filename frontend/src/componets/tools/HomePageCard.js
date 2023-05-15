import React from 'react'
import "./HomePageCard.css"

const HomePageCard = ( props ) => {
  return (
    <div className="homePageCard">
    <img src={ props.img }/>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Ram Bhandar</span>
        <span>4.0</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Near Bardi Square</span>
        <span>Rs 10/kg</span>
    </div>
    <div>
        <span>5625+ orders placed from here recently</span>
    </div>
</div>
  )
}

export default HomePageCard
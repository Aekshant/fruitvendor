import React from 'react'
import "./HomePageCard.css"
import { AiOutlineStar } from "react-icons/ai"
import { BiRupee } from "react-icons/bi"
import { IconContext } from "react-icons"

const HomePageCard = ( props ) => {
  return (
    <div className="homePageCard">
    <img src={ props.img }/>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Ram Bhandar</span>
        <div className='homePageRating'><span>4.0</span><AiOutlineStar/></div>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", color: "gray" }}>
        <span>Near Bardi Square</span>
        <div className='homePagePrize'>
          <BiRupee/>
          <span>10 for one Kg</span>
        </div>
    </div>
    <hr/>
    <div className='homePageHistory'>
      <img src='./arrow.webp'/>
      <span> 5625+ orders placed from here recently</span>
    </div>
</div>
  )
}

export default HomePageCard
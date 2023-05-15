import "./HomePage.css"
import { InlineContainer } from "./tools/InlineContainer"
import SelectBox from "./tools/SelectBox"
import { CiSearch } from 'react-icons/ci';
import { IconContext } from "react-icons"
import CircularAvtar from "./tools/CircularAvtar"
import CustomButton from "./tools/CustomButton";
import { BsFilterLeft } from "react-icons/bs"
import { Footer } from "./assets/Footer"
import HomePageCard from "./tools/HomePageCard"

import React from 'react'

const HomePage = () => {
  return (
    <div style={{ paddingLeft : "6%", paddingTop: "1.5rem", paddingRight : "6%" }}>
        <InlineContainer style={{ flex:1, marginTop: "1%", alignItems: "center" }} >
            <div className="homePageTitle" ><h3>A Vendor's</h3></div>
            <div className="homePageSearchBar" >
                <InlineContainer style={{ alignItems: "center" }}>
                    <SelectBox name="search" options={[ { value: "a1", name: "A1", key: "1"  } ]}/>
                    <h6 style={{ color:"grey", paddingTop: ".6%", fontSize: "1.1rem", marginRight: "1%" }}>|</h6>
                    <IconContext.Provider value={{ color: 'black', size: '1.8rem' }}>
                    <CiSearch/>
                    </IconContext.Provider>
                    <input type="search" className="inputIconBox" placeholder='Search for fruits or veggies' style={{ border: "0", width: "70%", marginTop: "0", marginLeft: ".5rem" }} />
                </InlineContainer> 
            </div>
            <div className="homePageNavButton">
                <span>Log In</span>
                <span>Sign Up</span>
            </div>
        </InlineContainer>
    <div className="homePageLocation">
        <span>Home / India / Maharashtra</span>
    </div>
    <div>
    <InlineContainer style={{ justifyContent : "start", marginTop : "1%", alignItems : "center" }} >
        <CircularAvtar  imageSrc="./scooter.png" imgStyle={{ backgroundColor : "#F5F0BB" }} style={{ margin : "1%", marginLeft : 0, borderBottom: ".13rem solid #D14D72" }} title ={ "Delivery" } active={true}/>
        <CircularAvtar  imageSrc="./walk.png" imgStyle={{ backgroundColor : "" }} style={{ margin : "1%", borderBottom: ".13rem solid grey" }}  title ={ "Walk In" } />
        <CircularAvtar  imageSrc="./findStore.png" imgStyle={{ backgroundColor : "" }} style={{ margin : "1%", borderBottom: ".13rem solid grey" }}  title ={ "Find Store" } />
    </InlineContainer>
    </div>
    <div className="homePageContent">
        <div className="homePageFilter">
            <CustomButton  title={ "Filter" } icon={ BsFilterLeft }/>
            <CustomButton  title={ "Rating: 4.0" } />
            <CustomButton  title={ "Veggies" } />
            <CustomButton  title={ "Fruits" } />
        </div>
        <div style={{ justifyContent : "start", display : "flex", margin : "2%", marginLeft : "0", color : "grey" }}>
            <h3>Delivery Restaurants in Maharashtra</h3>
        </div>
        <div className="homePageCards">
            <HomePageCard img ={ "./images/Banana.jpg" } />
            <HomePageCard img ={ "./images/Orange.jpg" }/>
            <HomePageCard img ={ "./images/Grapes.jpg" }/>
            <HomePageCard img ={ "./images/Mango.jpg" }/>
            <HomePageCard img ={ "./images/Pineapple.jpg" }/>
            <HomePageCard img ={ "./images/Strawberries.jpg" }/>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default HomePage
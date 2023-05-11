import "./HomePage.css"
import { InlineContainer } from "./tools/InlineContainer"
import JointSerachBar from "./tools/JointSerachBar"
import SelectBox from "./tools/SelectBox"
import { CiSearch } from 'react-icons/ci';
import { IconContext } from "react-icons"

import React from 'react'

const HomePage = () => {
  return (
    <div style={{ padding : "2rem", paddingTop: "1rem" }}>
        <InlineContainer style={{ justifyContent : "space-around", marginTop: "1%", alignItems: "center" }} >
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
    <div className="homePageLocation"><span>Home / India / Maharashtra</span></div>
    <div className="homePageSection">
        <div className="homePageSectionIcon">
        
        </div>
    </div>
    </div>
  )
}

export default HomePage
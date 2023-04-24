import React from 'react'
import "./LandingNavBar.css"
import { MdAppShortcut } from "react-icons/md"
// MdAppShortcut

const LandingNavBar = () => {
  return (
    <div className='landingNavBar' style={{ fontSize: "1.4rem" }}>
        <span>
          <MdAppShortcut/>
          Get the App</span>
        <span>Add Store</span>
        <span>Log In</span>
        <span>Sign Up</span>
    </div>
  )
}

export default LandingNavBar

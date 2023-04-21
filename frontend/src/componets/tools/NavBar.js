import React from 'react'
import "./NavBar.css"
import { InputBox } from './InputBox'

export const NavBar = () => {
    //registration, counter
  return (
    <div className='navbar' style={{ justifyContent: "flex-start" }}>
        <a>Fruits</a>
        <a>Veggie</a>
        <a>Location Filter</a>
        <div className='navbar-end'>
           <a>Join 1000K+ Vendors!</a>
        </div>
    </div>
  )
}

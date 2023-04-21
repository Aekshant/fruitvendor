import React from 'react'
import './Header.css';
import { InputBox } from '../tools/InputBox';
import { NavBar } from '../tools/NavBar';

 export const Header = () => {
  return (
   <div>
    <div className='headers'>
     <img className='head-icon' src='./shopping-bag.svg' />
      <h3>Street Vendors</h3>
     <div className='header-inputBox'>
      <InputBox/>
     </div>
   </div>
    <NavBar/>
   </div>
  )
}

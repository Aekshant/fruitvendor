import React from 'react'
import './Footer.css';
import { InlineContainer } from "../tools/InlineContainer"
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa'
import { HorizontalContainer } from "../tools/HorizontalContainer"

export const Footer = () => {
  return (
    <div className='footer'>
      <InlineContainer>
        <div>
          <h3>Vendors.org</h3>
          <p className='footer-statement'>Efforts To Make A Junction To A Alley Vendors.</p>
        </div>
        <div className='footer-social' style={{ width: "20%", marginLeft: "45%" }}>
            <span>Social Links</span>
            <div className='footer-icons'>
              <FaLinkedin/><FaInstagram/><FaTwitter/><FaYoutube/><FaFacebook/>
            </div>
        </div>
      </InlineContainer>
      <hr/>
      <span className='footer-terms' >By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2021-2023 © Aekshant™ Ltd. All rights reserved.</span>
    </div>
  )
}
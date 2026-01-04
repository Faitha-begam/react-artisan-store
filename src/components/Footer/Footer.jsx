import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} style={{ height: '50px' }} alt="" />
        <p>ARTIVO</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <i className="bi bi-instagram"></i>
        </div>
         <div className="footer-icons-container">
            <i className="bi bi-pinterest"></i>
        </div>
         <div className="footer-icons-container">
           <i className="bi bi-whatsapp"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

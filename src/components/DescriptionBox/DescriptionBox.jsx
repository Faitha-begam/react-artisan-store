import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator" style={{display:"flex"}}>
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>A creative e-commerce platform offering premium art supplies, craft tools, and DIY kits—all in one place. Designed for artists, makers, and beginners, our collection inspires creativity and makes every idea come to life.</p>
        <p>From vibrant painting materials to essential maker tools and fun DIY kits, our store is built to support creativity at every stage. Whether you’re exploring a new hobby or refining your craft, we provide quality products that turn imagination into art.</p>
      </div>
    </div>
  )
}

export default DescriptionBox

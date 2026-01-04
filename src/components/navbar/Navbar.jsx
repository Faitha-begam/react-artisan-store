import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { AllContext } from '../../context/AllContext';


const Navbar = () => {

     const [menu,setMenu] = useState("All Art")
     const {getTotalCartItems} = useContext(AllContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" style={{ height: '50px' }}/>
        <p>ARTIVO</p>
      </div>
      <ul className="nav-menu">
        
        <li onClick={()=>{setMenu("All Art")}}><Link style={{textDecoration:'none'}} to='/'>Art Catalogue</Link>{menu==="All Art"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Maker's Gear")}}><Link style={{textDecoration:'none'}} to='/makers-gear'>Maker’s Gear</Link>{menu==="Maker's Gear"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("The Masterworks")}}> <Link style={{textDecoration:'none'}} to='/TheMasterworks'>The Masterworks</Link>{menu==="The Masterworks"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Artful Living")}}> <Link style={{textDecoration:'none'}} to='/ArtfulLiving'>Artful Living</Link>{menu==="Artful Living"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to ='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" style={{ height: '40px' }}/></Link>
       <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

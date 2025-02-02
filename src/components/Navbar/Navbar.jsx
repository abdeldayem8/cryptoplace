import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { Coincontext } from '../../context/CoinContext/Coincontext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {setCurrency}= useContext(Coincontext);
  const currencyHandler = (e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:'usd',symbol:'$'});
        break;
      }
      case "eur":{
        setCurrency({name:'eur',symbol:'€'});
        break;
      }
      case "gbp":{
        setCurrency({name:'gbp',symbol:'£'});
        break;
      }
      default:{
        setCurrency({name:'usd',symbol:'$'});
        break;
      }
    }
  }
  return (
    <div className='Navbar'>
      <Link to='/'>
         <img src={logo} alt='Crypto Place' className='logo'/> 
         </Link>
        <ul>
        <Link to={'/'}><li>Home</li> </Link>   
        <li>Features</li>    
        <li>Pricing</li>    
        <li>Blog</li>    
        </ul>
        <div className='nav-right'>
        <select onChange={currencyHandler}>
        <option value='usd'>USD</option>    
        <option value='eur'>Eur</option>    
        <option value='gbp'>GBP</option>    
        </select>
        <button>Sign Up <img src={arrow} alt='Arrow Icon'/></button>    
        </div>     
    </div>
  )
}

export default Navbar

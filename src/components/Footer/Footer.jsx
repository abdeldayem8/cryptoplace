import React from 'react'
import './Footer.css'
const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <div className='footer'>
      <p> Copyright @ {currentYear}, Cryptoplace - All Right Reserved</p>
    </div>
  )
}

export default Footer

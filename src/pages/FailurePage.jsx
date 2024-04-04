import React from 'react'
import logo from '../IconsHanddrawn/logo.png';
import './FailurePage.css';
const FailurePage = () => {
  return (
    <div className='failure'>
        <div className="failure-container">
        <img src={logo} alt="" />
        <h2>Something went wrong, payment failed!</h2>
        <h3>Go back to <a href="https://handidraw.vercel.app/">home</a></h3>
    </div></div>
  )
}

export default FailurePage
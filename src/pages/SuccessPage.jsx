import React from 'react'
import logo from '../IconsHanddrawn/logo.png';
import {Link} from 'react-router-dom';
import './SuccesPage.css';

const SuccesPage = () => {
  return (
    <div className='Succes'>
        <div className="succes-container">
        <img src={logo} alt="" />
        <h4>Your payment was succesfull! You will receive an email with your Icon(s) shortly!</h4>
        <h3>Go back to <a href="https://handidraw.vercel.app/">home</a></h3>
        
    </div></div>
  )
}

export default SuccesPage
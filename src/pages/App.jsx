import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { CartProvider } from 'use-shopping-cart';
import SuccessPage from './SuccessPage.jsx';
import FailurePage from './FailurePage.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import {SnackbarProvider, enqueueSnackbar} from 'notistack';
import './App.css';

const handDrawn = () => {
  const stripeApiKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

  return ( <SnackbarProvider>
    <Auth0Provider
    domain="dev-h0yidujnp0qdkg3t.us.auth0.com"
    clientId="gc49cEwWbsj1Xp2QRFtW7WbezkVgo5Uv"
    authorizationParams={{
      redirect_uri: "https://handidraw.vercel.app/"
    }}
  >

    <CartProvider stripe={stripeApiKey}>
      <Router>
        <div className="App">
          <div className="Apps">
            
          </div>
          <Routes>
            <Route path="/" element= {<div className="navbar"><Navbar /></div>} /> 
              <Route path="/success" element={<div className='SuccesPage'><SuccessPage /></div> } />
              <Route path="/error" element={<div className='FailurePage'><FailurePage /></div>} />
           </Routes>
          
            
          </div>
        
      </Router>
    </CartProvider></Auth0Provider></SnackbarProvider>
  );
}

export default handDrawn;

  

  

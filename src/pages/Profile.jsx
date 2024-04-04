import {useState } from 'react'
import './Profile.css'
import logo from '../IconsHanddrawn/logo.png';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import UserProfile from '../components/UserProfile';
import { useAuth0 } from "@auth0/auth0-react";
import { useSnackbar } from 'notistack';


const Profile = () => {

  const {isAuthenticated} = useAuth0();
  const { enqueueSnackbar } = useSnackbar();

  const [isAuthenticatedState, setIsAuthenticatedState] = useState(isAuthenticated);

  

  return (
    <div className="p-profile">
      <div className='p-title'>
        <img src={logo} alt="" /><h1>Profile</h1>
      </div>
      <div className="p-login-container"> 
      
      <div className="p-signup-fields">
         {!isAuthenticatedState && <LoginButton></LoginButton>}  
         {isAuthenticatedState && <LogoutButton></LogoutButton>}
        </div>
        
        <UserProfile></UserProfile>
       
      </div>

    </div>
  )
}

export default Profile
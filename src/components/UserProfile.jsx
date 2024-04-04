import React, {useEffect, useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './UserProfile.css';
import { useShoppingCart } from "use-shopping-cart";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
    const { cartDetails } = useShoppingCart();
    


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="userProfile">
        <img src={user.picture} alt={user.name} />
        <h4>User name: {user.name}</h4>
       

      </div>
    )
  );
};

export default UserProfile;
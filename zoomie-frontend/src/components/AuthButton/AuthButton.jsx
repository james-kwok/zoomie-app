import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

const AuthButton = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <Link to="/profile">
        <button className="AuthButton">My Profile</button>
      </Link>
    );
  } else {
    return (
      <>
        <Link to="/welcome">
          <button className="AuthButton">Log In</button>
        </Link>
      </>
    );
  }
};

export default AuthButton;

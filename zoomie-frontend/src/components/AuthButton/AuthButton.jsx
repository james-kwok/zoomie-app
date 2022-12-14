import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButton.scss';

// button component for Nav
const AuthButton = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <>
        <Link to="/welcome">
          <button className="AuthButton">Sign Up</button>
        </Link>
      </>
    );
  } else {
    return null;
  }
};

export default AuthButton;

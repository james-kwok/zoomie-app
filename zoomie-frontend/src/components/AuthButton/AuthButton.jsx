import React from 'react';
import './AuthButton.scss'

const AuthButton = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <button className="AuthButton">Log out</button>;
  } else {
    return <button className="AuthButton">Log In</button>;
  }
};

export default AuthButton;

import React from 'react';
import './AuthButton.scss'

const AuthButton = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <button className="AuthButton">Logout</button>;
  } else {
    return <button className="AuthButton">Login</button>;
  }
};

export default AuthButton;

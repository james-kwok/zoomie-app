import { useState } from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpLogInPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [newUser, setNewUser] = useState(true);
  return (
    <>
      {newUser ? (
        <SignUpForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setNewUser={setNewUser} />
      ) : (
        <LogInForm setIsLoggedIn={setIsLoggedIn} setNewUser={setNewUser} />
      )}
    </>
  );
};

export default SignUpLogInPage;

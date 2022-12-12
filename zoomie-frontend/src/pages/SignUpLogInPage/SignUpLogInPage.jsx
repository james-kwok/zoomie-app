import { useState } from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpLogInPage = ({ setIsLoggedIn }) => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {newUser ? (
        <SignUpForm setIsLoggedIn={setIsLoggedIn} setNewUser={setNewUser} />
      ) : (
        <LogInForm setIsLoggedIn={setIsLoggedIn} setNewUser={setNewUser} />
      )}
    </>
  );
};

export default SignUpLogInPage;

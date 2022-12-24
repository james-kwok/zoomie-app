import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bg from '../../assets/images/bg.png';
import backIcon from '../../assets/icons/chevron-left-white.png';
import emailIcon from '../../assets/icons/email-icon.png';
import lockIcon from '../../assets/icons/lock-icon.png';
import CreateDogPage from '../../pages/CreateDogPage/CreateDogPage';
import './SignUpForm.scss';

const SignUpForm = ({ isLoggedIn, setIsLoggedIn, setNewUser }) => {
  const [expand, setExpand] = useState(true);
  const [isSignUpError, setIsSignUpError] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!e.target.email.value || !e.target.password.value) {
      setIsSignUpError(true);
      setError('Make sure to fill out all the fields');
      return;
    }

    const signUp = async () => {
      try {
        const res = await axios.post('http://localhost:8080/users/signup', {
          email: e.target.email.value,
          password: e.target.password.value,
        });
        if (!res.data) {
          setIsSignUpError(true);
          setError(
            'Oops, something went wrong. Check your inputs and try again!'
          );
        }
        setIsLoggedIn(true);
        sessionStorage.setItem('authToken', res.data.token);
        sessionStorage.setItem('loggedIn', 'true');
        navigate('/');
      } catch (error) {
        setIsSignUpError(true);
        setError('Something went wrong, try again later.');
      }
    };
    signUp();
  };

  const expandSheet = () => {
    setExpand(false);
  };

  return (
    <>
      {/* form to create a dog profile will render after sign up */}
      {isLoggedIn ? (
        <>
          <CreateDogPage />
        </>
      ) : (
        <div className="SignUpForm">
          <img className="SignUpForm__bg" src={bg} alt="background-image" />
          <div className="SignUpForm__logo-container">
            <Link to={-1} className="SignUpForm__navigate-link">
              <img
                className="SignUpForm__navigate"
                src={backIcon}
                alt="back-to-locations"
              />
              <p className="SignUpForm__navigate-text">Back</p>
            </Link>
            <div className="SignUpForm__text-container">
              <h1 className="SignUpForm__title">Sign Up</h1>
              <p className="SignUpForm__text">
                Sign up to check-in and browse nearby dog parks.
              </p>
            </div>
          </div>
          <div
            className={
              expand === true
                ? 'SignUpForm__sheet'
                : 'SignUpForm__sheet--expand'
            }
            onClick={expandSheet}
          >
            <form onSubmit={onSubmit} className="SignUpForm__form">
              <section className="SignUpForm__section">
                <div className="SignUpForm__icon-container">
                  <img
                    className="SignUpForm__icon"
                    src={emailIcon}
                    alt="email-icon"
                  />
                  <label className="SignUpForm__label" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  onChange={onChange}
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  className="SignUpForm__input"
                />
              </section>
              <section className="SignUpForm__section">
                <div className="SignUpForm__icon-container">
                  <img
                    className="SignUpForm__icon"
                    src={lockIcon}
                    alt="lock-icon"
                  />
                  <label className="SignUpForm__label" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  onChange={onChange}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="SignUpForm__input"
                />
              </section>
              <button>Sign Up</button>
              <p
                onClick={() => {
                  setNewUser((current) => !current);
                }}
                className="SignUpForm__switch"
              >
                Got an account? Log in here!
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;

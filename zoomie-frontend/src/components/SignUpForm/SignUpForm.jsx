import { useState } from 'react';
import axios from 'axios';
import logoWhite from '../../assets/logos/zoomie-logo-white.svg';
import logoTextWhite from '../../assets/logos/zoomie-text-white.svg';
import './SignUpForm.scss';
import bg from '../../assets/images/bg.png';

const SignUpForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  console.log(formData);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:8080/signup',
        { email: e.target.email.value, password: e.target.password.value },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSuccess(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <>
      <div className="SignUpForm">
        <img className="SignUpForm__bg" src={bg} alt="background-image" />
        <div className="SignUpForm__logo-container">
          <img className="SignUpForm__logo" src={logoWhite} alt="zoomie-logo" />
          <img
            className="SignUpForm__logo-text"
            src={logoTextWhite}
            alt="zoomie-text"
          />
          <div className="SignUpForm__text-container">
            <h1 className="SignUpForm__title">Sign Up</h1>
            <p className="SignUpForm__text">
              Sign up to check-in and browse nearby dog parks.
            </p>
          </div>
        </div>
        <div className="SignUpForm__sheet">
          <form onSubmit={onSubmit} className="SignUpForm__form">
            <section className="SignUpForm__section">
              <label className="SignUpForm__label" htmlFor="username">Email</label>
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
              <label className="SignUpForm__label" htmlFor="password">Password</label>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

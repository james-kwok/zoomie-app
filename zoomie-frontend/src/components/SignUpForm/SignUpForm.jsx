import { useState } from 'react';
import axios from 'axios';

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
      <h1 className="SignUpForm__title">Sign Up</h1>
      <form onSubmit={onSubmit} className="SignUpForm__form">
        <section className="SignUpForm__section">
          <label htmlFor="username">Email</label>
          <input
            onChange={onChange}
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Email Address"
          />
        </section>
        <section className="SignUpForm__section">
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
          />
        </section>
        <button>Sign in</button>
      </form>
    </>
  );
};

export default SignUpForm;

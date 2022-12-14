import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import bg from '../../assets/images/bg.png';
import backIcon from '../../assets/icons/chevron-left-white.png';
import emailIcon from '../../assets/icons/email-icon.png';
import lockIcon from '../../assets/icons/lock-icon.png';
import './LogInForm.scss';

const LogInForm = ({ setIsLoggedIn, setNewUser }) => {
  const navigate = useNavigate();
  const [isLoginError, setIsLoginError] = useState(false);
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

    if (!e.target.email.value || !e.target.password.value) {
      setIsLoginError(true);
      setError('All fields are required to log in.');
    }

    const logIn = async () => {
      try {
        const res = await axios.post('http://localhost:8080/users/login', {
          email: e.target.email.value,
          password: e.target.password.value,
        });
        if (!res.data) {
          setIsLoginError(true);
          setError(
            'Oops, something went wrong. Check your inputs and try again!'
          );
          return;
        }
        setIsLoggedIn(true);
        sessionStorage.setItem('authToken', res.data.token);
        sessionStorage.setItem('loggedIn', 'true');
        navigate('/');
      } catch (error) {
        setIsLoginError(true);
        setError('Something went wrong, try again later.');
      }
    };
    logIn();
  };

  return (
    <>
      <div className="LogInForm">
        <img className="LogInForm__bg" src={bg} alt="background-image" />
        <div className="LogInForm__logo-container">
          <Link to="/locations" className="LogInForm__navigate-link">
            <img
              className="LogInForm__navigate"
              src={backIcon}
              alt="back-to-locations"
            />
            <p className="LogInForm__navigate-text">Back</p>
          </Link>
          <div className="LogInForm__text-container">
            <h1 className="LogInForm__title">Log In</h1>
            <p className="LogInForm__text">Welcome back! 🐶</p>
          </div>
        </div>
        <div className="LogInForm__sheet">
          <form onSubmit={onSubmit} className="LogInForm__form">
            <section className="LogInForm__section">
              <div className="LogInForm__icon-container">
                <img
                  className="LogInForm__icon"
                  src={emailIcon}
                  alt="email-icon"
                />
                <label className="LogInForm__label" htmlFor="email">
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
                className="LogInForm__input"
              />
            </section>
            <section className="LogInForm__section">
              <div className="LogInForm__icon-container">
                <img
                  className="LogInForm__icon"
                  src={lockIcon}
                  alt="lock-icon"
                />
                <label className="LogInForm__label" htmlFor="password">
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
                className="LogInForm__input"
              />
            </section>
            <button>Log In</button>
            <p
              onClick={() => {
                setNewUser((current) => !current);
              }}
              className="LogInForm__switch"
            >
              New to Zoomie? Sign up here!
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInForm;

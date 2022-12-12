import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import NavBack from './components/NavBack/NavBack';
import HomePage from './pages/HomePage/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage/LocationDetailsPage';
import SignUpLogInPage from './pages/SignUpLogInPage/SignUpLogInPage';
import UserProfile from './components/UserProfile/UserProfile';
import DogProfile from './components/DogProfile/DogProfile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem('loggedIn'))
  );
  const handleLogOut = () => {
    sessionStorage.setItem('loggedIn', JSON.stringify(false));
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log(navigator.geolocation);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      });
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/locations" />} />
          <Route
            path="/locations"
            element={
              <>
                <Nav isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
                <HomePage />
                <BottomNav />
              </>
            }
          />
          <Route
            path="/locations/:id"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
                <LocationDetailsPage isLoggedIn={isLoggedIn} />
                <BottomNav />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
                <UserProfile isLoggedIn={isLoggedIn} />
              </>
            }
          />
          <Route
            path="/dogs/:id"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
                <DogProfile />
              </>
            }
          />
          <Route
            path="/welcome"
            element={<SignUpLogInPage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import NavBack from './components/NavBack/NavBack';
import HomePage from './pages/HomePage/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage/LocationDetailsPage';
import SignUpLogInPage from './pages/SignUpLogInPage/SignUpLogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import DogProfilePage from './pages/DogProfilePage/DogProfilePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem('loggedIn'))
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/locations" />} />
          <Route
            path="/locations"
            element={
              <>
                <Nav isLoggedIn={isLoggedIn} />
                <HomePage />
                <BottomNav isLoggedIn={isLoggedIn} />
              </>
            }
          />
          <Route
            path="/locations/:id"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} />
                <LocationDetailsPage isLoggedIn={isLoggedIn} />
                <BottomNav isLoggedIn={isLoggedIn} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} />
                <ProfilePage
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
                <BottomNav isLoggedIn={isLoggedIn} />
              </>
            }
          />
          <Route
            path="/dogs/:id"
            element={
              <>
                <NavBack isLoggedIn={isLoggedIn} />
                <DogProfilePage />
                <BottomNav isLoggedIn={isLoggedIn} />
              </>
            }
          />
          <Route
            path="/welcome"
            element={
              <SignUpLogInPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

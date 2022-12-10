import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import NavBack from './components/NavBack/NavBack';
import HomePage from './pages/HomePage/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage/LocationDetailsPage';
import SignUpLogInPage from './pages/SignUpPage/SignUpLogInPage';

const App = () => {
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
                <Nav />
                <HomePage />
                <BottomNav />
              </>
            }
          />
          <Route
            path="/locations/:id"
            element={
              <>
                <NavBack />
                <LocationDetailsPage />
                <BottomNav />
              </>
            }
          />
          <Route path="/signup" element={<SignUpLogInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

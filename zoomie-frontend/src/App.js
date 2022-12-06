import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage/LocationDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/locations" />} />
          <Route path="/locations" element={<HomePage />} />
          <Route path="/locations/:id" element={<LocationDetailsPage />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;

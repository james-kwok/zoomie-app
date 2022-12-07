import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import NavBack from './components/NavBack/NavBack';
import HomePage from './pages/HomePage/HomePage';
import LocationDetailsPage from './pages/LocationDetailsPage/LocationDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/locations" />} />
          <Route path="/locations" element={<><Nav /><HomePage /></>} />
          <Route path="/locations/:id" element={<><NavBack /><LocationDetailsPage /></>} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;

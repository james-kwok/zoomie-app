import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/locations" />} />
          <Route path="/locations" element={<HomePage />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;

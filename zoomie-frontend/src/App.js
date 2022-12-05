import './App.scss';
import BottomNav from './components/BottomNav/BottomNav';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <BottomNav />
    </>
  );
}

export default App;

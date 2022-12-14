import { useNavigate } from 'react-router-dom';
import './EmptyProfile.scss';

// not using this component at the moment
const EmptyProfile = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/welcome');
  };
  return (
    <>
      <div className="EmptyProfile">
        <img className="EmptyProfile__image" src="" alt="" />
        <h1 className="EmptyProfile__title">Sign up for a Zoomie Profile</h1>
        <p className="EmptyProfile__copy">
          Create a profile for your dog and check into dog parks. Join the
          party!
        </p>
        <button onClick={handleButton} className="EmptyProfile__button">
          Sign Up
        </button>
      </div>
    </>
  );
};

export default EmptyProfile;

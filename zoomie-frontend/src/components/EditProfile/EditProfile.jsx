import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import getUser from '../../utils/getUser';
import Loading from '../../components/Loading/Loading';
import './EditProfile.scss';

const EditProfile = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const updateDogURL = 'http://localhost:8080/dogs/profile';
  const [userProfile, setUserProfile] = useState([]);
  const [error, setError] = useState('');
  const token = sessionStorage.getItem('authToken');

  useEffect(() => {
    getUser({ setUserProfile });
  }, [isLoggedIn]);

  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    bio: '',
  });

  const { name, breed, bio } = formData;

  if (!userProfile) {
    return <Loading />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !breed || !bio) {
      setError(error, 'All fields are required');
    }

    const updateProfile = async () => {
      try {
        const res = await axios.put(
          updateDogURL,
          {
            name: name,
            breed: breed,
            img: 'https://res.cloudinary.com/deu69ydvq/image/upload/v1670949565/placeholder-avatar_xe9pk4.webp',
            bio: bio,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.data) {
          setError(
            'Oops, something went wrong. Check your inputs and try again!'
          );
          return;
        }
        navigate('/');
      } catch (error) {
        setError('Something went wrong, try again later.');
      }
    };
    updateProfile();
  };
  return (
    <>
      {userProfile[0] && isLoggedIn ? (
        <div className="EditProfile">
          <h1 className="EditProfile__title">Edit Profile</h1>
          <p className="EditProfile__description">
            Update profile information in the fields below
          </p>
          <form onSubmit={onSubmit} className="EditProfile__form">
            <section className="EditProfile__section">
              <label className="EditProfile__label" htmlFor="name">
                Name
              </label>
              <input
                onChange={onChange}
                id="name"
                name="name"
                type="text"
                value={name}
                placeholder={userProfile[0].name}
                className="EditProfile__input"
              />
            </section>
            <section className="EditProfile__section">
              <label className="EditProfile__label" htmlFor="breed">
                Breed
              </label>
              <input
                onChange={onChange}
                id="breed"
                name="breed"
                type="text"
                value={breed}
                placeholder={userProfile[0].breed}
                className="EditProfile__input"
              />
            </section>
            <section className="EditProfile__section">
              <label className="EditProfile__label" htmlFor="bio">
                Bio
              </label>
              <textarea
                onChange={onChange}
                id="bio"
                name="bio"
                type="textarea"
                value={bio}
                placeholder={userProfile[0].bio}
                className="EditProfile__input-textarea"
              />
            </section>
            <button type="submit">Update</button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default EditProfile;

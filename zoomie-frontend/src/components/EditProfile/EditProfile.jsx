import './EditProfile.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProfile = () => {
  const navigate = useNavigate();
  const userProfileURL = 'http://localhost:8080/dogs/profile';
  const updateDogURL = 'http://localhost:8080/dogs/post';
  const authToken = sessionStorage.getItem('authToken');
  const [userProfile, setUserProfile] = useState([]);
  const [error, setError] = useState('');
  const displayProfile = userProfile[0];

  useEffect(() => {
    axios
      .get(userProfileURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserProfile(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isLoggedIn]);

  const [formData, setFormData] = useState({
    name: displayProfile.name,
    breed: displayProfile.breed,
    bio: displayProfile.bio,
  });

  const { name, breed, bio } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !breed || !bio) {
      setError('All fields are required');
    }

    const updateProfile = async () => {
      try {
        const res = await axios.post(
          postDogURL,
          {
            name: name,
            breed: breed,
            img: 'https://res.cloudinary.com/deu69ydvq/image/upload/v1670949565/placeholder-avatar_xe9pk4.webp',
            bio: bio,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authToken}`,
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
      <div className="EditProfile">
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
              placeholder="What's your dog's name?"
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
              placeholder="What's the breed?"
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
              placeholder="Tell others something about your dog!"
              className="EditProfile__input-textarea"
            />
          </section>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default EditProfile;

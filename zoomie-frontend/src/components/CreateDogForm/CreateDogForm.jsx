import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../../assets/lottie/dog-lottie.json';
import './CreateDogForm.scss';

// this component renders after sign up
const CreateDogForm = () => {
  const navigate = useNavigate();
  const postDogURL = 'http://localhost:8080/dogs/post';
  const token = sessionStorage.getItem('authToken');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    bio: '',
  });

  const { name, breed, bio } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !breed || !bio) {
      setError('All fields are required');
    }

    const createProfile = async () => {
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
    createProfile();
  };
  return (
    <>
      <div className="CreateDogForm">
        <form onSubmit={onSubmit} className="CreateDogForm__form">
          {/* experimenting with Lottie */}
          <div className="CreateDogForm__animation-container">
            <Lottie
              animationData={animation}
              loop={true}
              className="CreateDogForm__lottie"
            />
          </div>
          <h1 className="CreateDogForm__title">Create Profile</h1>
          <p className="CreateDogForm__description">
            Create a profile for your dog, others will see your profile when you
            check in at a park.
          </p>
          <section className="CreateDogForm__section">
            <label className="CreateDogForm__label" htmlFor="name">
              Name
            </label>
            <input
              onChange={onChange}
              id="name"
              name="name"
              type="text"
              value={name}
              placeholder="What's your dog's name?"
              className="CreateDogForm__input"
            />
          </section>
          <section className="CreateDogForm__section">
            <label className="CreateDogForm__label" htmlFor="breed">
              Breed
            </label>
            <input
              onChange={onChange}
              id="breed"
              name="breed"
              type="text"
              value={breed}
              placeholder="What's the breed?"
              className="CreateDogForm__input"
            />
          </section>
          <section className="CreateDogForm__section">
            <label className="CreateDogForm__label" htmlFor="bio">
              Bio
            </label>
            <textarea
              onChange={onChange}
              id="bio"
              name="bio"
              type="textarea"
              value={bio}
              placeholder="Tell others something about your dog!"
              className="CreateDogForm__input-textarea"
            />
          </section>
          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
};

export default CreateDogForm;

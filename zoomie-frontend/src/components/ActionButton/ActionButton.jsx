import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActionButton.scss';

// button component for check in / check out
const ActionButton = ({
  location,
  checkins,
  userProfile,
  isCheckedIn,
  setIsCheckedIn,
  isLoggedIn,
}) => {
  const [error, setError] = useState('');
  const token = sessionStorage.getItem('authToken');
  const displayProfile = userProfile[0];

  // find logged in user's check-in status
  useEffect(() => {
    if (isLoggedIn && checkins && userProfile) {
      const findUser = checkins.find((user) => {
        return user.dog_id === displayProfile.id;
      });
      const { status } = findUser || {};
      if (status === 1) {
        setIsCheckedIn(true);
      } else if (status === 0) {
        setIsCheckedIn(false);
      }
    }
  }, [userProfile]);

  const postCheckIn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        'http://localhost:8080/checkins',
        {
          location_id: location.id,
          status: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.data) {
        setError('Unable to post check-in.');
        return;
      }
      window.location.reload();
    } catch (error) {
      setError('Something went wrong, try again later.');
    }
  };

  const postCheckOut = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put(
        'http://localhost:8080/checkins',
        {
          location_id: location.id,
          status: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.data) {
        setError('Unable to update check-in.');
        return;
      }
      window.location.reload();
    } catch (error) {
      setError('Something went wrong, try again later.');
    }
  };

  return (
    <>
      {isCheckedIn === false ? (
        <button onClick={postCheckIn} type="submit" className="Actionbutton">
          <span className="ActionButton__text">Check In</span>
        </button>
      ) : (
        <button
          onClick={postCheckOut}
          type="submit"
          className="ActionButton__secondary"
        >
          <span className="ActionButton_text">Check Out</span>
        </button>
      )}
    </>
  );
};

export default ActionButton;

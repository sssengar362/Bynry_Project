import React from 'react';
import classes from './Profile.module.css';

const Profile = ({ name, photo, description, onClickSummary }) => {
  return (
    <div className={classes.card}>
        <div className={classes.card}>
          <img src={`${process.env.PUBLIC_URL}/profileimgs/${photo}`}alt={name} />
          <h2>{name}</h2>
          <p>{description}</p>
          <button onClick={onClickSummary}>Summary</button>
        </div>
      
    </div>
    
    
  );
};

export default Profile;

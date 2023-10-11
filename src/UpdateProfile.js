import React, { useState, useEffect } from "react";
import { useProfiles } from "./ProfileProvider";
import { useParams } from "react-router-dom";

function UpdateProfile() {
  const { profiles, updateProfile } = useProfiles();
  const { name } = useParams();
  const [editedProfile, setEditedProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: { lat: "", lng: "" },
  });

  useEffect(() => {
    const profileToEdit = profiles.find((profile) => profile.name === name);
    if (profileToEdit) {
      setEditedProfile(profileToEdit);
    }
  }, [profiles, name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({
      ...editedProfile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(editedProfile);
    window.location.replace("/admin");
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedProfile.name}
            onChange={handleChange}
            required
            disabled
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            name="photo"
            value={editedProfile.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={editedProfile.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={editedProfile.address.lat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            name="lng"
            value={editedProfile.address.lng}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UpdateProfile;

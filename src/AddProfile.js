import { useState } from "react";
import { useProfiles } from "./ProfileProvider";

function AddProfile() {
  const { addProfile } = useProfiles();
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: { lat: "", lng: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setNewProfile({
        ...newProfile,
        address: {
          ...newProfile.address,
          [name]: value,
        },
      });
    } else {
      setNewProfile({
        ...newProfile,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: { lat: "", lng: "" },
    });
    window.location.replace("/");
  };

  return (
    <div>
      <h2>Add New Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            name="photo"
            value={newProfile.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newProfile.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={newProfile.address.lat}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            name="lng"
            value={newProfile.address.lng}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;

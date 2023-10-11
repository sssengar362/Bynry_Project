import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Map from "./Map";
import { useProfiles } from "./ProfileProvider";
import { Link, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import AddProfile from "./AddProfile";
import UpdateProfile from "./UpdateProfile";
const App = () => {
  const { profiles, addProfile } = useProfiles();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profilesInitialized, setProfilesInitialized] = useState(false);

  useEffect(() => {
    const profilesAreInitialized = localStorage.getItem("profilesInitialized");

    if (!profilesAreInitialized) {
      const profiless = [
        {
          name: "Major",
          photo: "img1.jpeg",
          description: "Web Developer",
          address: { lat: "52.7128", lng: "-63.789" },
        },
        {
          name: "Spiderman",
          photo: "img2.jpeg",
          description: "Backend Developer",
          address: { lat: "40.7128", lng: "-74.006" },
        },
        {
          name: "Batman",
          photo: "img3.jpeg",
          description: "Node JS Developer",
          address: { lat: "42.14706", lng: "126.54143" },
        },
      ];

      localStorage.setItem("profiles", JSON.stringify(profiless));
      localStorage.setItem("profilesInitialized", "true");
      setProfilesInitialized(true);
    } else {
      setProfilesInitialized(true);
    }
  }, []);

  if (!profilesInitialized) {
    return null;
  }

  const handleSummaryClick = (profile) => {
    setSelectedProfile({
      ...profile,
      address: {
        lat: parseFloat(profile.address.lat),
        lng: parseFloat(profile.address.lng),
      },
    });
  };
  return (
    <>
      <Link to={"/admin"}>Admin Panel</Link>
      <div className="app">
        <div className="profile-list">
          {profiles.map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              photo={profile.photo}
              description={profile.description}
              onClickSummary={() => handleSummaryClick(profile)}
            />
          ))}
        </div>
        <div className="map-container">
          {selectedProfile && (
            <Map
              center={selectedProfile.address}
              markerPosition={selectedProfile.address}
            />
          )}
        </div>
      </div>
      <Routes>
        <Route exact path="/admin" element={<AdminPanel />}></Route>
        <Route exact path="/add" element={<AddProfile />} />
        <Route exact path="/edit/:name" element={<UpdateProfile />} />
      </Routes>
    </>
  );
};

export default App;

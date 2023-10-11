import React, { createContext, useState, useEffect, useContext } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const addProfile = (newProfile) => {
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };
  const updateProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.name === updatedProfile.name ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };

  const deleteProfile = (profileName) => {
    const updatedProfiles = profiles.filter(
      (profile) => profile.name !== profileName
    );
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        addProfile,
        updateProfile,
        deleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  return useContext(ProfileContext);
};

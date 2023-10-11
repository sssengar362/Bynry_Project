import React from "react";
import { useProfiles } from "./ProfileProvider";
import { Link } from "react-router-dom";

function AdminPanel() {
  const { profiles, deleteProfile } = useProfiles();

  const handleDeleteProfile = (name) => {
    deleteProfile(name);
  };

  return (
    <div>
      <Link to={"/add"}>Add</Link>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>
                <img
                  src={`${process.env.PUBLIC_URL}/profileimgs/${profile.photo}`}
                  alt={profile.name}
                  width="50"
                />
              </td>
              <td>{profile.description}</td>
              <td>
                <button onClick={() => handleDeleteProfile(profile.name)}>
                  Delete
                </button>
                <Link to={`/edit/${profile.name}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;

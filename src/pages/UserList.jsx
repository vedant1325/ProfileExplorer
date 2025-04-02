import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(savedProfiles);
  }, []);

  const handleEdit = (index) => {
    navigate("/admin", { state: { editIndex: index, profileData: profiles[index] } });
  };

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User List</h2>
      
      {profiles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No Users Available</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-32 h-32 object-cover rounded-full border shadow-md mb-3"
              />
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-gray-600">{profile.summary}</p>
              <p className="text-gray-500">{profile.address}</p>
              
              {/* Edit & Delete Buttons */}
              <div className="mt-3 flex gap-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;

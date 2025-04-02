import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Profiles</h2>

      {profiles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No Profile Available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center w-full max-w-xs mx-auto">
              
              {/* Image Container (Smaller Size) */}
              <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-gray-300">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mt-3">{profile.name}</h3>
              <p className="text-gray-600 text-sm px-2">{profile.summary.slice(0,84)}....</p>
              <p className="text-gray-500 text-xs mt-1">{profile.address}</p>

              {/* Summary Button to Show Map */}
              <button
                onClick={() => navigate("/map", { 
                  state: { 
                    name: profile.name, 
                    image: profile.image,
                    summary: profile.summary, 
                    address: profile.address 
                  } 
                })}
                className="mt-3 bg-blue-500 text-white text-sm px-4 py-2 rounded-md"
              >
                Summary
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profiles;

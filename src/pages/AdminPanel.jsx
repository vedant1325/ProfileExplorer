import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editIndex = location.state?.editIndex;
  const editData = location.state?.profileData;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setImage(editData.image);
      setSummary(editData.summary);
      setAddress(editData.address);
    }
  }, [editData]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    const newProfile = { name, image, summary, address };

    if (editIndex !== undefined) {
      profiles[editIndex] = newProfile; // Update existing profile
    } else {
      profiles.push(newProfile); // Add new profile
    }

    localStorage.setItem("profiles", JSON.stringify(profiles));
    navigate("/profiles");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 flex flex-col gap-5">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          
          <Link to="/userlist" className="py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            View User List
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">{editData ? "Edit User" : "Add User"}</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
            <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} />
            
            {image && <img src={image} alt="Preview" className="w-24 h-24 mt-2 rounded" />}

            <textarea
              placeholder="Summary"
              className="border p-2 rounded"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            ></textarea>

            <input
              type="text"
              placeholder="Address"
              className="border p-2 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <button type="submit" className="bg-blue-500 text-white py-2 rounded">
              {editData ? "Update User" : "Add User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <section className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">Profile Explorer</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover and manage user profiles effortlessly with our platform.
        </p>
        <div className="mt-6">
          <Link
            to="/profiles"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Explore Profiles
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <h3 className="text-xl font-semibold">Easy Profile Management</h3>
          <p className="mt-2 text-gray-600">
            Seamlessly manage user profiles with an intuitive interface.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <h3 className="text-xl font-semibold">Admin Dashboard</h3>
          <p className="mt-2 text-gray-600">
            Get full control over profiles and user data with our powerful dashboard.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <h3 className="text-xl font-semibold">Secure & Reliable</h3>
          <p className="mt-2 text-gray-600">
            We prioritize data security and reliability to ensure a smooth experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

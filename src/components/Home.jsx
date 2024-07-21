// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg my-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Placement Portal</h2>
        <p className="text-lg mb-4">Find your dream job and connect with top companies.</p>
        <a href="/jobs" className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold hover:bg-gray-200">Explore Jobs</a>
      </section>
      <section className="my-8">
        <h3 className="text-2xl font-bold mb-4">Recent Job Postings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add Job Card Components Here */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h4 className="text-xl font-bold mb-2">Software Engineer</h4>
            <p className="text-gray-700">Google</p>
            <p className="text-gray-600">Mountain View, CA</p>
            <a href="/job/1" className="text-blue-600 hover:underline">View Details</a>
          </div>
          {/* Repeat Job Cards */}
        </div>
      </section>
      <section className="my-8">
        <h3 className="text-2xl font-bold mb-4">Featured Companies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add Company Card Components Here */}
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <h4 className="text-xl font-bold mb-2">Google</h4>
            <p className="text-gray-700">Technology Company</p>
            <a href="/company/1" className="text-blue-600 hover:underline">View Details</a>
          </div>
          {/* Repeat Company Cards */}
        </div>
      </section>
    </main>
  );
};

export default Home;

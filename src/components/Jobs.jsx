// src/pages/Jobs.jsx
import React from 'react';

const Jobs = () => {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Job Listings</h2>
      <div className="mb-4">
        <input type="text" placeholder="Search jobs..." className="p-2 border rounded w-full mb-4"/>
        <div className="flex space-x-4">
          <select className="p-2 border rounded">
            <option>Job Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
          </select>
          <select className="p-2 border rounded">
            <option>Location</option>
            <option>Remote</option>
            <option>On-site</option>
          </select>
          <select className="p-2 border rounded">
            <option>Company</option>
            <option>Google</option>
            <option>Facebook</option>
          </select>
        </div>
      </div>
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
    </main>
  );
};

export default Jobs;

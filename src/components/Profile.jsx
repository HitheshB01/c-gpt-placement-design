// src/pages/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [editing, setEditing] = useState(false);

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Your Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" className="p-2 border rounded w-full" disabled={!editing} defaultValue="John Doe"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" className="p-2 border rounded w-full" disabled={!editing} defaultValue="john.doe@example.com"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Education:</label>
          <textarea className="p-2 border rounded w-full" disabled={!editing} defaultValue="B.Tech in Computer Science"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Work Experience:</label>
          <textarea className="p-2 border rounded w-full" disabled={!editing} defaultValue="Software Engineer at ABC Corp"></textarea>
        </div>
        <button 
          onClick={() => setEditing(!editing)} 
          className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700">
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>
    </main>
  );
};

export default Profile;

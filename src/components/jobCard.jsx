// src/components/JobCard.jsx
import React from 'react';

const JobCard = ({ title, company, location, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700">{company}</p>
      <p className="text-gray-600">{location}</p>
      <a href={`/job/${id}`} className="text-blue-600 hover:underline">View Details</a>
    </div>
  );
};

export default JobCard;

// src/components/CompanyCard.jsx
import React from 'react';

const CompanyCard = ({ name, description, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h4 className="text-xl font-bold mb-2">{name}</h4>
      <p className="text-gray-700">{description}</p>
      <a href={`/company/${id}`} className="text-blue-600 hover:underline">View Details</a>
    </div>
  );
};

export default CompanyCard;

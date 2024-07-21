// src/components/Question.js
import React from 'react';

const Question = ({ type, options, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded p-2 mb-2"
      />
      {type === 'radio' && options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input type="radio" name="option" className="mr-2" />
          <label>{option}</label>
        </div>
      ))}
      {type === 'checkbox' && options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;
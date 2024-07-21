// src/components/Form.js
import React from 'react';
import Question from './Question';

const Form = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Additional Questions</h2>
      <Question type="text" placeholder="Add question 1 (optional)" />
      <Question type="radio" options={['Option A', 'Option B']} placeholder="Add question 2 (optional)" />
      <Question type="checkbox" options={['Option A']} placeholder="Add question 3 (optional)" />
      <Question type="text" placeholder="Add question 4 (optional)" />
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">More</button>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded">Save and finish later</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
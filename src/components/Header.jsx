// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Placement Portal</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/" className="hover:underline">Resume</a></li>
            <li><a href="/jobs" className="hover:underline">Companies</a></li>
            <li><a href="/profile" className="hover:underline">Profile</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

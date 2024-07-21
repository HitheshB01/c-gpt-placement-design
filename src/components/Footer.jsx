// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Placement Portal. All rights reserved.</p>
        <nav className="mt-2">
          <a href="/terms" className="hover:underline mx-2">Terms</a> | 
          <a href="/privacy" className="hover:underline mx-2">Privacy</a>
        </nav>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" className="hover:underline"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" className="hover:underline"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" className="hover:underline"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

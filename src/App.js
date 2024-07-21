// src/App.jsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Form from './pages/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const App = () => {
  return (
    <div>
      {/* <Header />
      <RouterProvider router={router} />
      <Footer /> */}
      <Form/>
    </div>
  );
};

export default App;

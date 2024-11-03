// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <Link to="/add-product" className="mb-4 hover:text-gray-300">
        Add Products
      </Link>
      <Link to="/placed-orders" className="mb-4 hover:text-gray-300">
        Placed Orders
      </Link>
      <Link to="/completed-orders" className="mb-4 hover:text-gray-300">
        Completed Orders
      </Link>
    </div>
  );
};

export default Sidebar;

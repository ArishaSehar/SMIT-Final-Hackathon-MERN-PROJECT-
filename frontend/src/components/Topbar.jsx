import React from 'react';

const Topbar = ({ user }) => {
  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Welcome, {user?.fullName || 'Employee'}</h1>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;

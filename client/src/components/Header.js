import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 rounded-r-md rounded-l-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Patient Management System</h1>
        {/* <div className="text-white text-lg">{userName}</div> */}
        <div className="text-white text-2xl font-semibold">Dr. Niraj Logged In</div>
      </div>
    </header>
  );
};

export default Header;
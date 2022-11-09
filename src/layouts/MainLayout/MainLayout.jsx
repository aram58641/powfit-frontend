import React from 'react';
import NavBar from './NavBar';
import TopBar from './TopBar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;

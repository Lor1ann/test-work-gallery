import React from 'react';
import Drawer from './Drawer';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand>
          <Drawer />
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;

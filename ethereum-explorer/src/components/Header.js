import React from 'react';
import logo from '../assets/ethereum.png';

function Header() {
  return (
    <div className="header">
       <img src={logo} alt="Logo"  style={{ width: '250px' }} />
    </div>
  );
}

export default Header;
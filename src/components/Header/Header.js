import React from 'react';
import './Header.css';
import logo from '../../logo.png';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

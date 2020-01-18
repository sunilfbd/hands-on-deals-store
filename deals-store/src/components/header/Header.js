import React from 'react';
import ServiceMenu from './ServiceMenu';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header  className="rc-header">
        <a href="#one" className="logo-wrapper">
            <img src={logo} className="logo-img" alt="logo" />
        </a>
       <ServiceMenu />
    </header>
  );
}

export default Header;
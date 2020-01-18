import React from 'react';
import ServiceMenu from './ServiceMenu';

function Header() {
  return (
    <header  className="rc-header">
        <a href="#one">
            <img src="" alt="" />
        </a>
       <ServiceMenu />
    </header>
  );
}

export default Header;
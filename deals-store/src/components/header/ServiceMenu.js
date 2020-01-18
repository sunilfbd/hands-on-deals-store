import React from 'react';

function ServiceMenu() {
  return (
    <nav className="rc-service-menu">
        <ul className="rc-service-menu-list">
            <li className="rc-service-menu-item">
                <button className="rc-wishlist-icn"></button>
            </li>
            <li className="rc-service-menu-item">
                <button className="rc-cart-icn"></button>
            </li>
        </ul>
    </nav>
  );
}

export default ServiceMenu;
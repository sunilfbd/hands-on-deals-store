import React from 'react';

function ServiceMenu() {
  return (
    <nav className="rc-service-menu">
        <ul className="rc-service-menu-list">
            <li className="rc-service-menu-item">
                <button className="rc-background-icn rc-wishlist-icn"></button>
            </li>
            <li className="rc-service-menu-item">
                <button className="rc-background-icn rc-cart-icn"></button>
            </li>
        </ul>
    </nav>
  );
}

export default ServiceMenu;
import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
       prodList: []
    }
  }

  render() {
    return (
      <main>
        <ul>
          <li>
              <picture className="rc-prod-item-img-wrapper">
                <a href="#item" className="rc-prod-item-link">
                  <img className="rc-prod-item-img" src="" alt="" />
                </a>
              </picture>

              <p className="rc-prod-item-desc">
                <a href="#item" className="rc-prod-item-link">
                  lorem  ipsum dolor de amet lorem  ipsum dolor de amet lore de amet lorem  ipsum dolor de amet lore de amet lorem  ipsum dolor de amet lore
                </a>
              </p>

              <span>$USD 199.00</span>

              <div className="rc-cta-wrapper">
                <button className="rc-wishlist-icn">
                  <span className="rc-icn-alt">Add to wishlist</span>
                </button>
                <button className="rc-cart-icn">
                  <span className="rc-icn-alt">Add to cart</span>
                </button>
              </div>

          </li>
        </ul>
      </main>
    );
  }
}

export default ProductList;
import React, { Component } from 'react';
import ProductItem from './productItem';
import prodData from '../data';

// <ProductItem props="{prod}" />

class ProductList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
       prodList: prodData
    }
  }

  render() {


    return (
      <main className="rc-main-content" >
        <ul className="rc-prod-list">
        {
          this.state.prodList.results.map(prod => {
            return <ProductItem key={prod.id} product={prod} />;
          })
        }
        </ul>
      </main>
    );
  }
}

export default ProductList;
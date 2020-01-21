import React, { Component } from 'react';
import ProductItem from './productItem';
// import prodData from '../data';

class ProductList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
       prodList: []
    }
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(result => {
          this.setState({prodList: result})
      })
  }

  render() {
    console.log(this.state.prodList);
    return (
      <main className="rc-main-content" >
        <h1 className="rc-page-title">{this.state.prodList.title} </h1>
        <ul className="rc-prod-list">
        {
          this.state.prodList.map(prod => {
            return <ProductItem key={prod.id} product={prod} />;
          })
        }
        </ul>
      </main>
    );
  }
}

export default ProductList;
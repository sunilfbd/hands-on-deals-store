import React, { Component } from 'react';
import ProductItem from './productItem';
import {setStateOnLoad} from '../store/actions/setStateOnLoad'
import {connect} from 'react-redux';

class ProductList extends Component {
  constructor(props){
    super(props);

    this.state = {
      prodList: []
    }
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(result => {
          this.props.setStateOnLoad(result)
      })
  }

  render() {
    return (
      <main className="rc-main-content" >
        <h1 className="rc-page-title">{this.props.prodList.title} </h1>
        <ul className="rc-prod-list">
        {
          this.props.prodList.map(prod => {
            return <ProductItem key={prod.id} product={prod} />;
          })
        }
        </ul>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prodList: state.onLoad.prodList
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStateOnLoad: (resList) => dispatch(setStateOnLoad(resList))
  }
}

ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default ProductList;
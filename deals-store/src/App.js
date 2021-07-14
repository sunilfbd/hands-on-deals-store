import React from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList'; 

function App() {
  return (
    <div className="rc-container">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import ProductList from './component/ProductList';
//import Product from './component/Product';
import Detail from './component/Detail';
import Default from './component/Default';
import Cart from './component/Cart';
/*creating a json file to control ur main is one solutio
for avoiding creating too any index,js file to house 
your files package json serves that purpose in cart folder
n i can avoid relative part */ 
import Modal from './component/Modal';
//import Footer from './component/Footer';
class App extends Component {
  render() {
    return (

      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
       <Modal/>

      </React.Fragment>

    );
  }
}

export default App;

// React
import React,{Component} from "react";
// Import Style 


// import Files Styling 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component 
import Navbar from "./components/Navbar/Navbar"; 
import Footer from "./components/Footer/Footer";

// Router Dom 
import {Switch,Route} from "react-router-dom"

// Pages 
import Home from "./pages/Home";
import Products from "./pages/products";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
//import Actions
import {setSingle_Product} from "./reducers/Action"
// import { PureComponent } from 'react';
import {connect} from "react-redux"


class App extends Component {
  render(){
    return (
      <>
      <Navbar/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/about">
           <About/>
         </Route>
         <Route exact path="/contact">
           <Contact/>
         </Route>
         <Route exact path="/products">
           <Products/>
         </Route>
         <Route exact path="/products/:id">
           <ProductInfo/>
         </Route>
         <Route exact path="/cart">
           <Cart/>
         </Route>
       </Switch>
       <Footer/>
      </>
    );
  }
}

export default connect(
  (state) => {
  return{
    cart : state,
    count:state.count,
    singleProduct:state.singleProduct
  }
},{setSingle_Product})(App);
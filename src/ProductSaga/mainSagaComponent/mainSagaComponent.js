import React from 'react';
import {Route,Link,Switch,Redirect} from 'react-router-dom'

import RegisterComponent from './../../RegisterUser/RegisterUser'
import LoginComponent from './../../LoginUser/LoginUser'
import ProductComponent from '../views/productaction'
//import ProductCard from './../views/productCard'
import Header from './../views/header';
import AddCart from '../views/addToCart';
import CustomerInfo from '../views/customerInfo';

const MainSagaComponent = ()=>{

    return(
        <div className = 'container'>

         
         <Link to = "/"></Link>

      
        <Switch>
          <Route exact path = "/" component = {Header}></Route>
          <Route exact path = "/register" component = {RegisterComponent}></Route>
          <Route exact path = "/login" component = {LoginComponent}></Route>
          <Route exact path = "/addproduct" component = {ProductComponent}></Route>
          <Route exact path = "/addtocart" component = {AddCart}></Route>
          <Route exact path = "/customerinfo" component = {CustomerInfo}></Route>
          <Redirect to="/"></Redirect>
          {/* <Route exact path = "/productCard" component = {ProductCard}></Route> */}
          
         
        </Switch>

        </div>
    );

};

export default MainSagaComponent;
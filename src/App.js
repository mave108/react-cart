import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from './Containers/Login/login';
import Products from './Containers/Products/products';
import ProductAdd from './Containers/Products/add';
import Cart from './Containers/Cart/cart';
import Productdetail from './Containers/Products/detail';
import Logout from './Containers/Login/logout';




class App extends Component {

  
  render() {
    return (
      <BrowserRouter  basename={process.env.PUBLIC_URL}>      
      <Switch>           
      <Route path="/product/:pid/detail">
          {( context ) => (
              <Productdetail history={context.history} pid={context.match.params.pid}/>
          )}
      </Route>         
      <Route path="/product/add" exact component={ProductAdd} /> 
      <Route path="/cart" exact component={Cart} />     
      <Route path="/login" exact component={Login} /> 
      <Route path="/logout" exact component={Logout} />     
      <Route path="/" exact component={Products} />        
      </Switch>      
    </BrowserRouter>    
    );
  }
}

export default App;
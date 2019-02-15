import React from 'react';
import {Link } from 'react-router-dom';
import {_isLoggedIn} from '../../Helper/functions';


const Nav = (props) =>{
    const loggedInUser = _isLoggedIn();
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="logo">
      Cart
      </Link>
      <div className="collapse navbar-collapse" id="navbarsExample10">
        <ul className="navbar-nav justify-content-md-start">          
          <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">            
            <Link to="/cart" className="nav-link active">Cart</Link>
          </li> 
          <li className="nav-item">            
            <Link to="/product/add" className="nav-link active">Add Product</Link>
          </li>
            {!loggedInUser?(<li className="nav-item">            
            <Link to="/login" className="nav-link active">Login</Link>
          </li>):null} 
        </ul>
        {loggedInUser?(
            <ul className="navbar-nav justify-content-end">
            <li className="nav-item price">
              <span className="nav-link">howdy: {loggedInUser}</span>
            </li> 
            <li className="nav-item">
              <Link to="/logout" className="nav-link active">Logout</Link>
            </li> 
          </ul>
          ):null}
      </div>
    </nav>
    );
}

export default Nav;
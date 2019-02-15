import React from 'react';
import {Link } from 'react-router-dom';

const cartcontainer = (props) =>{
  return (
    <div className="card shopping-cart">
    <div className="card-header bg-dark text-light">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        Shipping cart
        <Link to="/" className="btn btn-outline-info btn-sm pull-right" style={{float:"right"}}>Continiu shopping</Link>
        <div className="clearfix"></div>
    </div>
    <div className="card-body">
            {props.children}
    </div>
    <div className="card-footer">
        <div className="pull-right" style={{margin: "10px",float:"right"}}>
            <div className="pull-right" style={{margin: "5px"}}>
                Total price: INR<b> {props.cartTotal()}</b>
            </div>
        </div>
    </div>
</div>
  );
}

export default cartcontainer;
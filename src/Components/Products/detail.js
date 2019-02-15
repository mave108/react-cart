import React from 'react';
import {_isLoggedIn} from '../../Helper/functions';

const Detail = (props) => {
   
    return (
        <div className="jumbotron product-detail-box">
          <div className="container">
          <div className="media">
            <img className="mr-3" src={props.detail.image} />
            <div className="media-body">
                <h5 className="mt-0">{props.detail.title}</h5>
                <h4 className="price">Current Price: <span>INR {props.detail.price}</span></h4>
                {props.detail.description}
                <div>
                    <br />
                <button type="submit" className="btn btn-success product-btn" onClick={()=> props.addToCartHandler(props.detail.id)}>Add to Cart</button>&nbsp;
                {_isLoggedIn()?(
                    <button type="submit" className="btn btn-danger product-btn" onClick={()=> props.deleteHandler(props.detail.id) }>Delete</button>
                ):null}
                </div>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Detail;
import React from 'react';
import {Link} from 'react-router-dom';
import {_isLoggedIn} from '../../Helper/functions';
class ProductList extends React.Component{
    
    render(){
    return(
        <div className="post-container">
        {this.props.products.map((product)=>{
          return (
          <div className="card product-card" 
               key={product.id}                
            >          
            <div className="card-body">
            <img className="card-img-top" src={product.image} alt={product.title} />
            <div>
                <h5 className="card-title">{product.title}</h5>
                <h3>INR {product.price}</h3>
                <div className="card-desc">{product.description}</div>
            </div>
            <button type="submit" className="btn btn-success product-btn" onClick={()=> this.props.addToCartHandler(product.id)}>Add to Cart</button>&nbsp;
            {_isLoggedIn()?(
                <button type="submit" className="btn btn-danger product-btn" onClick={()=> this.props.deleteHandler(product.id) }>Delete</button>
            ):null}
            &nbsp;<Link className="btn btn-primary product-btn" to={`/product/${product.id}/detail`}>View Detail</Link>
            </div>

          </div>
        )
        })}   
        </div>     
    );
}
}

export default ProductList;
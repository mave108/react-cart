import React from 'react';
import {connect} from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getProducts, deleteProduct, addToCart, getCart, deleteCart} from '../../Actions/actions';
import ProductList from '../../Components/Products/List';
import Error from '../../Components/Error/Errorcomponent/Errorcomponent';
import {Link} from 'react-router-dom';


class Products extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           some: null
       } 
       this.deleteProduct    = this.deleteProduct.bind(this);
       this.addToCartHandler = this.addToCartHandler.bind(this);
   }

   componentDidMount(){
     this.props.dispatch(getProducts());
     this.props.dispatch(getCart());
   }
   addToCartHandler(productid){
       if(this.props.dispatch(addToCart(productid))){
         alert("Product added to cart successfully");  
       }else{
        alert("Product already in cart");  
       }
   }
   deleteProduct(productid){
    confirmAlert({
        title: 'Confirm to delete?',
        message: 'Are you sure to delete?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => { 
                this.props.dispatch(deleteProduct(productid));
                //delete from as well
                this.props.dispatch(deleteCart(productid));
            }
          },
          {
            label: 'No', 
          }
        ]
      });
    
   }
    render(){
  
        return(
            <Layout>
                <Nav />
                <br/>
         {
             (typeof this.props.products !='undefined' && this.props.products.length>0)?(<ProductList deleteHandler={this.deleteProduct} 
                products={this.props.products} 
                addToCartHandler={this.addToCartHandler}                            
   />):(<Error>No Product found <Link to="/product/add">Click</Link> to add new product.</Error>)
         }

                
                
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        products : state.main.products,                     
        }
}

export default connect (mapStateToProps,null)(Products);
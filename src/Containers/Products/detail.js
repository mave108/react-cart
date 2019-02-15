import React from 'react';
import {connect} from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getProducts, addToCart, getCart, deleteProduct, deleteCart} from '../../Actions/actions';
import Productdetail from '../../Components/Products/detail';


class Detail extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           some: null
       } 
       this.deleteProduct = this.deleteProduct.bind(this);
       this.addToCartHandler = this.addToCartHandler.bind(this);
   }

   componentDidMount(){
     this.props.dispatch(getProducts());
     this.props.dispatch(getCart());
   }
    findProductById(productid){
       return this.props.products.filter( product => product.id === productid)[0];
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
                    this.props.dispatch(deleteProduct(this.props.pid));
                    //delete from cart as well
                    this.props.dispatch(deleteCart(this.props.pid));
                    this.props.history.push("/");
                }
            },
            {
                label: 'No', 
            }
            ]
        });
        
    }
    render(){
  console.log("[detail]",this.props);
        return(
            <Layout>
                <Nav />
                <br/>
                {typeof this.props.products !='undefined'?(
                <Productdetail detail={this.findProductById(this.props.pid)}
                               addToCartHandler={this.addToCartHandler}
                               deleteHandler={this.deleteProduct}
                />
                ):null}
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        products : state.main.products,                     
        }
}

export default connect (mapStateToProps,null)(Detail);
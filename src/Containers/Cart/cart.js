import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {getCart, deleteCart} from '../../Actions/actions';
import Cartcontainer from '../../Components/Cart/container';
import Cartitem from '../../Components/Cart/item';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Error from '../../Components/Error/Errorcomponent/Errorcomponent';
import {Link} from 'react-router-dom';



class Products extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           some: null
       } 
       this.cartTotal = this.cartTotal.bind(this);
       this.deleteCartHandler = this.deleteCartHandler.bind(this);
   }

   componentDidMount(){
     this.props.dispatch(getCart());
   }
   cartTotal(){
    let total = 0;  
    if(typeof this.props.cart != 'undefined'){
        this.props.cart.forEach( item => {
            total+= parseInt(item.price);
        });
    }
    return total;
   }

   deleteCartHandler(productid){
    confirmAlert({
        title: 'Confirm to delete?',
        message: 'Are you sure to delete?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.props.dispatch(deleteCart(productid))
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
                  (typeof this.props.cart !='undefined' && this.props.cart.length>0)?(
                    <Cartcontainer cartTotal={this.cartTotal}>
                     <Cartitem cart={this.props.cart} 
                               deleteCartHandler={this.deleteCartHandler}/>
                    </Cartcontainer>
                    ):(<Error>Your cart is empty <Link to="/">Click</Link> to add product to cart.</Error>)
             }  
                <br /><br />
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        cart : state.main.cart,                     
        }
}

export default connect (mapStateToProps,null)(Products);
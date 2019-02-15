import axios from 'axios';
import {LOGIN_API_BASE_URL} from '../Config/config';
import {PRODUCTS, LOGGEDIN_USER, CART} from './types';
import {_guid} from '../Helper/functions';
import findIndex from 'lodash/findIndex';


export const getProducts = () =>{
    return (dispatch) => {          
        dispatch({ type: PRODUCTS, payload:[]});                    
        const allProducts = JSON.parse(localStorage.getItem('products')) || [];
        dispatch({ type: PRODUCTS, payload: allProducts});   
    }
}   

export const AddProduct = (newProduct) =>{
    return (dispatch,getState) => {    
        const getCurrentState = getState(); 
        let newList;
        if(getCurrentState.main.products){
            newList = [{...newProduct,id: _guid()},...getCurrentState.main.products];
        }else{
            newList = [{...newProduct,id: _guid()}];
        } 
        localStorage.setItem('products',JSON.stringify(newList));
        dispatch({ type: PRODUCTS, payload: newList});   
    }
} 

export const deleteProduct = (productid) => {
    return (dispatch,getState) => {
        const getCurrentState = getState();
        const afterDeletion = getCurrentState.main.products.filter( product => product.id !== productid);
        localStorage.setItem('products',JSON.stringify(afterDeletion)); 
        dispatch({ type: PRODUCTS, payload: afterDeletion});
    }     
}
export const getCart = () =>{
    return (dispatch) => {                             
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        dispatch({ type: CART, payload: cart});   
    }
}

export const addToCart = (productid) =>{
    return (dispatch,getState) => {    
        const getCurrentState = getState(); 
        let {cart} = getCurrentState.main;
        //check if product is already in cart
        if(cart && cart.length>0){
            if(findIndex(cart, item =>  item.id === productid) > -1){
                return false;
            }
        }
        
        if(getCurrentState.main.products){
            //find the requested product
            const requestedProduct = getCurrentState.main.products.filter( product => product.id === productid)[0];
            //add to cart object
            if(getCurrentState.main.cart.length > 0){
                cart.push(requestedProduct)
            }else{
                cart = [{...requestedProduct}];
            }
        } 
        localStorage.setItem('cart',JSON.stringify(cart));
        dispatch({ type: CART, payload: cart});
        return true;   
    }
} 
export const deleteCart = (productid) => {
    return (dispatch,getState) => {
        const getCurrentState = getState();
        const afterDeletion = getCurrentState.main.cart.filter( item => item.id !== productid);
        localStorage.setItem('cart',JSON.stringify(afterDeletion)); 
        dispatch({ type: CART, payload: afterDeletion});
    }     
}
export const validateUser = (username,password) =>{   
    return (dispatch) => {        
            dispatch({ type: LOGGEDIN_USER, payload:undefined});// initial set to undefined
            return axios.get(`${LOGIN_API_BASE_URL}people/?search=${username}`).
            then( response => {                
                if(response.data.count === 1){
                    const data = response.data.results[0];                                                           
                    return data.name === username && data.birth_year === password? data: false
                }else{
                    return false;
                }
             }                                                        
            ).then( validUser =>{                
                dispatch({ type: LOGGEDIN_USER, payload:validUser});                 
            });
    }
}


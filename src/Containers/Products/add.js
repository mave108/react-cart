import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Nav from '../../Components/Nav/Nav';
import {AddProduct} from '../../Actions/actions';
import ProductAddForm from '../../Components/Products/add';
import {_isLoggedIn} from '../../Helper/functions';


class Products extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           some: null
       }
       this.formRef = React.createRef();
       this.submitHandler = this.submitHandler.bind(this);
   }

   componentDidMount(){
     //check user authentication
      if(!_isLoggedIn()){
        this.props.history.push("/login");
      }
   }
   submitHandler(formValues){
    this.props.dispatch(AddProduct(formValues));
   }
   
    render(){
  
        return(
            <Layout>
                <Nav />
                <br/>
                <ProductAddForm formRef={this.formRef} submitHandler={this.submitHandler}/>
               
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
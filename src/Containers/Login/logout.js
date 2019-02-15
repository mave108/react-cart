import React from 'react';
import {connect} from 'react-redux';
import Layout from '../../Components/Layout/layout';
import Loginform from '../../Components/Loginform/loginform';
import {validateUser} from '../../Actions/actions';
import {_setCookies, _isLoggedIn} from '../../Helper/functions';

class Login extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           username: undefined,
           password: undefined
       }
    _setCookies('Logged_in_user','',0);
    this.props.history.push("/");
   }
    render(){
        return(
            <Layout>
            </Layout>
        );
    }
}
function mapStateToProps(state){
    return {
        loggedinUser : state.main.loggedinUser,                     
        }
}

export default connect (mapStateToProps,null)(Login);
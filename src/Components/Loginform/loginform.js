import React from 'react';
import Errorcomponent from '../Error/Errorcomponent/Errorcomponent';
import {Link} from 'react-router-dom';

const Loginform = (props) =>{
    
  const withoutEventDefault = callback => event => {   
    event.preventDefault()
    callback()
  }

    return(
        <div className="row" id="pwd-container">
    <div className="col-md-4"></div>
    
    <div className="col-md-4">
      <section className="login-form">
        <form method="post" action="#" role="login" onSubmit={withoutEventDefault(props.loginHandler)}>
          <input type="text" onChange={(e)=> props.updateUsernameHandler(e.target.value)} name="email" autoComplete="off" placeholder="Name" required defaultValue={props.username} className="form-control input-lg" />
          <input type="password" onChange={(e)=> props.updatePasswordHandler(e.target.value)} className="form-control input-lg" id="password" defaultValue={props.password} placeholder="Password" required />
          {props.loggedinUser === false && <Errorcomponent>Username or password incorrect</Errorcomponent>}
          <button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Sign in</button>
          
          
        </form>
        
        <div className="form-links">
        <Link to="/" className="nav-link">Return to home</Link>
        </div>
      </section>  
      </div>
      
      <div className="col-md-4"></div>
      

  </div>
  
  
    );
}

export  default Loginform;
import React from 'react';
const Errorcomponent = (props) =>{
    return(
        <div className="alert alert-danger" role="alert">
          {props.children}
        </div>
    );
}
export default Errorcomponent;
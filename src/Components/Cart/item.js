import React from 'react';

const cartitem = (props) =>{
   return (
      props.cart.map((item) => {
          return (
            <div className="row cart" key={item.id}>
            <div className="col-12 col-sm-12 col-md-2 text-center">
                    <img className="img-responsive" src={item.image} width="120" height="80" />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{item.title}</strong></h4>
                <h4>
                    <p className="product-description">{item.description}</p>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: "5px"}}>
                    <h6>INR <strong>{item.price}</strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                   
                </div>
                <div className="col-2 col-sm-2 col-md-2 text-right">
                    <button type="button" 
                            onClick={() => props.deleteCartHandler(item.id)}
                            className="btn btn-outline-danger btn-xs" 
                            style={{marginTop: "4px"}}>
                        <i aria-hidden="true">&times;</i>
                    </button>
                </div>
            </div>
        </div>
          );
      }) 
   );
}

export default cartitem;
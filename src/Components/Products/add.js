import React from 'react';

const Productaddform = (props)=>{
    const titleRef = React.createRef();
    const priceRef = React.createRef();
    const imageRef = React.createRef();
    const descriptionRef = React.createRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        const formValues = {
            title: titleRef.current.value,
            price: priceRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value
        };
        //empty the form
        titleRef.current.value = null;
        priceRef.current.value = null;
        imageRef.current.value = null;
        descriptionRef.current.value = null;
        props.submitHandler(formValues);
        
    }
    return (
        <div className="card add-product-card">
            <div className="card-body">
            <form ref={props.formRef} onSubmit={(e)=>{submitHandler(e)}}> 
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input ref={titleRef} type="text" required="required" className="form-control" id="title" placeholder="Title" /> 
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input ref={priceRef} type="text" required="required" className="form-control" id="price" placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input ref={imageRef} type="text" required="required" className="form-control" id="image" placeholder="Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                   <textarea ref={descriptionRef} required="required" name="description" className="form-control" rows="5" id="description" placeholder="Description"></textarea>
                </div>
                <button type="submit" className="btn btn-primary product-btn">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Productaddform;
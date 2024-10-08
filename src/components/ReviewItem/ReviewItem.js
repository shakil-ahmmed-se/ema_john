import React, { useEffect } from 'react';
import fakeData from '../../fakeData';

const ReviewItem = (props) => {
    // console.log(props)
    
    const { name, quantity, key, price } = props.product;
    
   
    return (
        <div style={{borderBottom:'1px solid gray', marginBottom:'10px', paddingBottom:'10px'}} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantiy: {quantity}</p>
            <p><small>Price : ${price}</small></p>
            <button onClick={()=>{props.handleRemoveItem(key)}} className='btn btn-warning'>Remove Item</button>
        </div>
    );
};

export default ReviewItem;
import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [carts, setCarts] = useState([]);
    // fetch data from server or local state
    useEffect(()=>{
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;

        })
        setCarts(cartProducts);
    },[]);
    return (
        <div>
            <h1>Order Items : {carts.length}</h1>
            {
                carts.map(product => <ReviewItem product={product} key={product.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;
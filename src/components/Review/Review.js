import React, { useEffect, useState } from 'react';
import { deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [carts, setCarts] = useState([]);
    const handleRemoveItem = (productKey) =>{
        // console.log('removed', productKey);
        const newCart = carts.filter(pd => pd.key !== productKey);
        setCarts(newCart);
        deleteFromDb(productKey);
    };
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
        <div className='shop_container'>
            <div className='product_container'>
                {
                    carts.map(product => <ReviewItem product={product} key={product.key} handleRemoveItem ={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Review;
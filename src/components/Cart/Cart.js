import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for(let i =0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered:{cart.length} </p>
            <p>Total Price: $ {total}</p>
            <Link to='/review'>
                <button className='btn btn-warning'>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;
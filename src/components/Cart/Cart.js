import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for(let i =0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price
    }
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items Ordered:{cart.length} </p>
            <pre>Total Price: $ {total}</pre>
        </div>
    );
};

export default Cart;
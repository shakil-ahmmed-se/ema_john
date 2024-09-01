import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="product" />
            </div>
            <div className='product_description'>
                <h3 className='product_name'>{name}</h3>

                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in Stock- Order Soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='add_cart_btn btn btn-warning'>
                <FontAwesomeIcon icon={faShoppingCart}  /> Add to cart
                </button>
            </div>

        </div>
    );
};



export default Product;
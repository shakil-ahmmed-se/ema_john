import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props.product
    // )
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="product" />
            </div>
            <div className='product_description'>
                <h3 className='product_name'><Link to={'/product/'+key}>{name}</Link></h3>

                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in Stock- Order Soon</small></p>
                {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className='add_cart_btn btn btn-warning'>
                <FontAwesomeIcon icon={faShoppingCart}  /> Add to cart
                </button>}
            </div>

        </div>
    );
};



export default Product;
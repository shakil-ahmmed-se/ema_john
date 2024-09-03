import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }
    return (
        <div className='shop_container'>
            <div className="product_container">

                {
                    products.map(product => <Product showAddToCart={true} product={product} key={product.key} handleAddProduct={handleAddProduct}></Product>)
                }

            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
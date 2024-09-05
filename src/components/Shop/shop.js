import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(pdKey => {
             const product = fakeData.find(pd => pd.key === pdKey);
             product.quantity = savedCart[pdKey];
             return product;
        });
        setCart(previousCart)
    },[])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = count;
            newCart = [...cart, product];
        }
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
                <Cart cart={cart}>

                <Link to='/review'>
                <button className='btn btn-warning'>Review Order</button>
                </Link>

                </Cart>
            </div>

        </div>
    );
};

export default Shop;
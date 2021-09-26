import React, { useEffect, useState } from 'react';
import Buy from '../Buy/Buy';
import Cart from './Cart/Cart';
import "./main.css"

const Main = () => {
    const [cart, setCart] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    const addHandle = carts => {
        const newCart = [...shoppingCart, carts];
        setShoppingCart(newCart);
        

    }

    return (
        <div className="">
            <div className="cart-design">
                <span className="row row-cols-1 row-cols-md-3 g-3 m-5">
                    {
                        cart.map(cart => <Cart
                            cart={cart}
                            addHandle={addHandle}></Cart>)

                    }
                </span>
                <span>
                <Buy shoppingCart={shoppingCart}></Buy>
                </span>
            </div>
           
        </div>
    );
};

export default Main;
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
        <div className="cart-design">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-3 m-5">
                    {
                        cart.map(cart => <Cart
                            cart={cart}
                            addHandle={addHandle}></Cart>)

                    }
                </div>
            </div>
            <div>
                <Buy shoppingCart={shoppingCart}></Buy>
            </div>
        </div>
    );
};

export default Main;
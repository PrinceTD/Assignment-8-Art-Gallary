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
    // button handler
    const addHandle = carts => {
        const newCart = [...shoppingCart, carts];
        setShoppingCart(newCart);


    }

    return (

        <div className="row">
            <div className="col-md-10">
                <div className="row row-cols-1 row-cols-md-3 g-3 m-4 p-2">
                    {
                        cart.map(cart => <Cart
                            cart={cart}
                            addHandle={addHandle}></Cart>)

                    }
                </div>
            </div>
            <div className="col-md-2">
                <Buy shoppingCart={shoppingCart}></Buy>
            </div>
        </div>
    );
};

export default Main;
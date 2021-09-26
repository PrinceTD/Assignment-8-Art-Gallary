import React from 'react';
import './Buy.css'

const Buy = (props) => {
    const { shoppingCart } = props;
    let total = 0;

    for (const cart of shoppingCart) {
        total = total + cart.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <div className='border p-1 cart'>
                <div className='total-cart'>
                    <span className='cart-details'>
                        <h5><strong>Order Summary</strong></h5>
                        <p>Item order: {props.shoppingCart.length}</p>
                    </span>
                    <span>
                        <span className="total">
                            <small>Item:</small>
                            <small>$ {total}</small>
                        </span>
                        <span className="total">
                            <small>Shipping:</small>
                            <small>$ {shipping}</small>
                        </span>
                        <span className="total">
                            <small>Tax</small>
                            <small>$ {tax}</small>
                        </span>
                    </span>
                    <br />
                    <span className="cart-details">

                        <span className='total'>
                            <h6>Total cost:</h6>
                            <h6>$ {grandTotal.toFixed(2)}</h6>
                        </span>
                        <button className="buy"><strong><small>Buy Now</small></strong></button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Buy;
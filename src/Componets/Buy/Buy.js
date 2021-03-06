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
    // total sum
    const grandTotal = total + shipping + tax;

    return (
        <div>
            {/* order summary */}
            <div className='border p-1 cart me-1'>
                <div className='total-cart'>
                    <div className='cart-details'>
                        <h5><strong>Order Summary</strong></h5>
                        <p>Item order: {props.shoppingCart.length}</p>
                    </div>
                    <div>
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
                    </div>
                    <br />
                    {/* total sum */}
                    <div className='total cart-details'>
                        <h6>Total cost:</h6>
                        <h6>$ {grandTotal.toFixed(2)}</h6>
                    </div>
                    <button className="buy"><strong><small>Buy Now</small></strong></button>
                </div>
            </div>

        </div>
    );
};

export default Buy;
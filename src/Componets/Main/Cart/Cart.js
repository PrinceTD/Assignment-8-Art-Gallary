import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.css'
import Rating from 'react-rating';

const Cart = (props) => {
    const { name, img, artist, star, painted, price, dimensions } = props.cart;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    return (
        <div>
            <div>
                <div className="background-clr">
                    <div className="col">
                        <div className="card rounded h-100 ">
                            <div className="card-body image">
                                <img src={img} alt="" height='300px' width="300px" />
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">
                                    <span>
                                        Artist: {artist}
                                    </span>
                                    <br />
                                    <span>
                                        <span className='d-flex justify-content-between pe-3'>
                                            <small> Painted: {painted}</small>
                                            <small className="text-warning"> <Rating
                                                initialRating={star}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                            /> ({star})</small>
                                        </span>
                                        <span>
                                            <small>Dimensions: {dimensions}</small><br />
                                            <small> <strong className='h6'>Price:$ {price}</strong></small>
                                        </span>
                                    </span>

                                </p>
                                <button onClick={() => props.addHandle(props.cart)} className="btn btn-dark">{element} Add now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
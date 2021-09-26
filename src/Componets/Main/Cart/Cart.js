import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.css'
import Rating from 'react-rating';

const Cart = (props) => {
    const { name, img, artist, star, painted, price } = props.cart;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    return (
        <div>
            <div>
                <div className="background-clr">
                    <div class="col">
                        <div class="card rounded ">
                            <div class="card-body image">
                                <img src={img} alt="" height='300px' width="300px" />
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">
                                    <span>
                                        Artist: {artist}
                                    </span>
                                    <br />
                                    <div>
                                        <div >
                                            <span className='d-flex justify-content-between pe-3'>
                                                <small> Painted: {painted}</small>
                                                <small className="text-warning"> <Rating
                                                    initialRating={star}
                                                    readonly
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                /></small>
                                            </span>
                                            <span>
                                                <small> <strong className='h6'>Price:$ {price}</strong></small>
                                            </span>
                                        </div>


                                    </div>
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
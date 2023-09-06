import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumps from './../Breadcrumps';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_QUANTITY } from '../ReduxStore/actions/Action';

const Cart = () => {
    document.title = 'ShopWave - Cart'
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems)
    const order = useSelector(state => state.order)
    const totalCost = order.items.reduce((total, item) => total+ (+item.price.slice(1) * item.quantity), 0)
    const changeQuantity = (value, elem) => {
        dispatch({type : CHANGE_QUANTITY , payload : {...elem, quantity :value}})
    }


    return (
        <>
            <Navbar />
            <Breadcrumps />
            {/* Cart Container */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 px-md-5 mb-4">
                        <div className="container border border-2 border-primary-subtle rounded ">
                            {cartItems.map((elem) => {
                                return (<>
                                    <div className="item px-1 py-3 d-flex flex-column flex-md-row align-items-start justify-content-between position-relative pe-5">

                                        <div className="d-flex flex-row align-items-center">
                                            <img src={elem.image} className="img-fluid rounded" alt="" style={{ width: "5rem", height: "5rem", objectFit: "cover" }} />
                                            <div className="itemDetails d-flex flex-column" >
                                                <h5 className="ms-3 mb-0" >{elem.name}</h5>
                                                <p className="ms-3 mb-0" >{elem.category}</p>
                                                <p className="ms-3 mb-0" >{elem.price}</p>
                                                <p className="ms-3 mb-0" >{elem.quantity}</p>
                                            </div>
                                        </div>

                                        <div className="quantity mt-2" >
                                            <label for="Quantity " style={{ marginRight: "1rem" }}>Quantity  </label>
                                            <select name="Quantity" id="quantity" onChange={(e) => {changeQuantity(e.target.value, elem)}}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="cross position-absolute end-0" >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-x-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <hr className="p-0 m-0" />
                                    </>)
                            })}
                            
                        </div>
                    </div>
                    {/* Cart Container Ends */}

                    {/* Pay Now Container */}
                    <div className="col-md-4">
                        <div className="container border border-2 border-primary-subtle rounded ">
                            <div className="item px-1 py-3 d-flex flex-column justify-content-between">
                                <form className="">
                                    <h5 className="mb-3">Total Order</h5>
                                    <p className="mb-1" > Apply Promo Code</p>
                                    <div className="d-flex flex-column flex-md-row w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">
                                            Promo Code</label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Promo Code"
                                        />
                                        <button className="btn btn-primary" type="button">
                                            Apply</button>
                                    </div>

                                    <div className="price d-flex flex-column mt-4 w-100 gap-2">
                                        <div className="itemPrice d-flex flex-row justify-content-between">
                                            <p>Cost</p>
                                            <p>${totalCost.toFixed(2)}</p>
                                        </div>
                                        <div className="itemShipping d-flex flex-row justify-content-between">
                                            <p>Shipping Charges</p>
                                            <p>${order.shipping_charge}</p>
                                        </div>
                                        <div className="itemDiscount d-flex flex-row justify-content-between">
                                            <p>Discount ({order.discount}%)</p>
                                            <p>-${(totalCost * order.discount/100).toFixed(2)}</p>
                                        </div>
                                        <div className="itemTotal d-flex flex-row justify-content-between">
                                            <h4>Total</h4>
                                            <h4>${(totalCost+order.shipping_charge-(totalCost * order.discount/100)).toFixed(2)}</h4>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    {/* Pay Now Container Ends */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart

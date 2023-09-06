import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from './ReduxStore/actions/Action';

const Items = () => {
    const Database = useSelector(state => state.product)
    const dispatch = useDispatch();

    const addToCart = (elem) => {
        dispatch({type:ADD_TO_CART, payload : elem})
    }

    
    return (
        <>
            <div className="row mx-auto row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

                {Database.product.map((e) => {
                    return <div key={e.id} className="col">
                        {console.log(e)}
                        <div className="card h-100">
                            <img src={e.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-body-secondary">{e.category}</h6>
                                <h5 className="card-title">{e.name}</h5>
                                <p className="card-text d-flex justify-content-between">
                                    {e.price} <span className="ratings text-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-star-fill me-1 text-center text-warning"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>

                                    </span>
                                </p>
                            </div>
                            <div className=" bg-white d-grid mx-auto p-3">
                                <button onClick={() => addToCart(e)} className="btn btn-outline-danger btn-sm mx-auto fs-6" >Add to cart</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default Items

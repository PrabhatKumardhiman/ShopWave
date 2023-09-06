import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_ITEMS } from './ReduxStore/actions/Action';

const Navbar = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(state => state.cart.items)

    useEffect(() => {
        dispatch({ type: CART_ITEMS, payload: cartCount })
    }, [cartCount])

    return (
        <div className="sticky-top" >
            <nav className="navbar navbar-expand-lg bg-primary py-3" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        ShopWave
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Category
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Cameras
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Clothings
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            Gadgets
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link position-relative" >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-bag me-1"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                    My Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount.length}</span>
                                </Link>

                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2 bg-light text-primary"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ color: "black" }}
                            />
                            <button className="btn btn-outline-light" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

import Navbar from "../Navbar"
import Footer from "../Footer"

const Login = () => {

    return (
        <>
            <Navbar />
            <div>
                <div className="Login mt-5 d-flex flex-column flex-md-row align-items-center justify-content-center container mt-4 gap-4" >
                    {/* Logo */}
                    <div className="logo d-flex align-items-center col-md-6">
                        <h1>Shopwave</h1>
                    </div>
                    {/* Login Form */}
                    <div className="form col-md-4 p-4 shadow mb-5 bg-body-tertiary rounded">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Check me out
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
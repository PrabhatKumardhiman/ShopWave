import Navbar from "../Navbar"
import Footer from "../Footer"

const Signup = () => {

    return (
        <>
            <Navbar />
            <div>
                <div className="Login mt-5 d-flex flex-column flex-md-row align-items-top justify-content-center container mt-4 gap-4" >
                    {/* Logo */}
                    <div className="logo col-md-6 d-flex signupLogo align-items-center" >
                        <div className=" " >
                            <h1 className="text-center">Shopwave</h1>
                        </div>
                    </div>

                    
                    {/* Login Form */}
                    <div className="form col-md-4 p-4 shadow mb-5 bg-body-tertiary rounded">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    aria-describedby="emailHelp"
                                />
                            </div>
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
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                />
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

export default Signup;
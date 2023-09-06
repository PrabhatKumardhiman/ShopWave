import Navbar from "../Navbar"
import Footer from "../Footer"


const Failed = () => {


    return (
        <>
            <Navbar />
            <div className="container " >
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-6">
                        <div className="form d-flex flex-column align-items-center p-4 shadow mb-5 bg-body-tertiary rounded">
                            <h1 className="text-center fs-3">Something went Wrong! Your order can't be placed</h1>
                            <p>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={156}
                                height={156}
                                fill="currentColor"
                                className="bi bi-check2-circle text-danger text-center"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg>
                            </p>
                            <p className="text-center mb-1">Failure Message</p>
                            <p className="text-center">Visit Home page <a href="/">Home</a></p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Failed;
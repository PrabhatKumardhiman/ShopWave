import Navbar from "../Navbar"
import Footer from "../Footer"


const Sucess = () => {


    return (
        <>
            <Navbar />
            <div className="container " >
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <div className="col-md-6">
                        <div className="form d-flex flex-column align-items-center p-4 shadow mb-5 bg-body-tertiary rounded">
                            <h1 className="text-center fs-3">Success</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={156}
                                height={156}
                                fill="currentColor"
                                className="bi bi-check2-circle text-success text-center"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                            <p className="text-center">Your Order is placed and will be delivered soon</p>
                            <p className="text-center">Thank You! for Shopping</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sucess;
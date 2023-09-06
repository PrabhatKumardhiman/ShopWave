import React from 'react'

const Product = () => {
  return (
    <div className="container my-5">
      <div className="row d-sm-flex flex-sm-raw">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src="https://plus.unsplash.com/premium_photo-1668092287943-acb25d918065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="img-fluid" alt="" />
        </div>

        <div className="col-md-2 product d-flex flex-md-column justify-content-center order-md-first">
          <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="img-fluid" alt="" />
          <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="img-fluid" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1668092287943-acb25d918065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="img-fluid" alt="" />
        </div>

        <div className="col-md-6">
          <h3>Vivo Y100A 5G (Metal Black, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers</h3>
          <hr />
          <button className="btn btn-danger btn-sm">Deal of the Day</button>
          <h3 className="d-flex align-items-top mt-1 mb-0"><span className="text-danger fw-lighter me-3">-19% </span><i className="fs-6 mt-1">₹</i>29,999</h3>
          <p className="test-small text-secondary ms-2">Inclusive of all taxes</p>
          <button className="btn btn-primary d-flex align-items-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus-fill me-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
          </svg>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
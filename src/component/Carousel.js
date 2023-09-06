const Carousel = () => {

    return (
        <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={3000}>
                    <img src="https://images.unsplash.com/photo-1602526432604-029a709e131c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="d-block w-100" alt="..." style={{height : "90vh", objectFit: "cover"}} />
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                    <img src="https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80" className="d-block w-100" alt="..." style={{height : "90vh", objectFit: "cover"}} />
                </div>
                <div className="carousel-item" data-bs-interval={3000}>
                    <img src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80" className="d-block h-md-50 w-100" alt="..." style={{height : "90vh", objectFit: "cover"}} />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}


export default Carousel;
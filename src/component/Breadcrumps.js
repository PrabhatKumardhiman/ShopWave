import React from 'react'

const Breadcrumps = () => {
    return (
        <div className= "container-fluid d-flex align-items-center bg-body-tertiary p-2">
            <div className = "container">
            <nav aria-label=" breadcrumb ">
                <ol className="breadcrumb p-0 m-0">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Data
    </li>
                </ol>
            </nav>

        </div>
        </div>
    )
}

export default Breadcrumps

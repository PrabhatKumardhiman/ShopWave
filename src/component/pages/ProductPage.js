import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumps from '../Breadcrumps';
import Product from '../Product';

const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <Breadcrumps />
            <Product/>
            <Footer />
        </div>
    )
}

export default ProductPage;

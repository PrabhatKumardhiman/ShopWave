import React from 'react'
import Items from './Items';

const ItemsContainer = () => {
    return (
        <div className="container mx-auto d-flex align-items-center jusify-content-center">
            <div className="row mx-auto">
               <Items/>
            </div>
        </div>
    )
}

export default ItemsContainer

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsItems = () => {
    let { id } = useParams;
    console.log(id)
    return (
        <h1>Products Items</h1>
    )
}

export default ProductsItems;
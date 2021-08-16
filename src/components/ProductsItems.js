import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json'

const ProductsItems = () => {
    const { id } = useParams();
    const shoe = shoes[id];
    if (!shoe) {
        return <h1>Product Not Found</h1>;
    }
    return (
        <>
            <h1>Products Items</h1>
            <div>
                <h3>{shoe.name}</h3>
                <img src={shoe.img} alt={shoe.name} />

            </div>
        </>
    )
}

export default ProductsItems;
import React from 'react';
import shoes from '../shoes.json';
import abc from '../App.css'
import { Link } from 'react-router-dom'



const Products = () => {
    return (
        <>
            <h1>Welcome to the Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Object.keys(shoes).map((keyName) => {
                    const shoe = shoes[keyName];
                    return <Link to={`/productsitems/${keyName}`} style={{ textAlign: 'center', width: '300px', boxShadow: '0 0 10px #463636', margin: '10px' }} key={keyName}>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height='150' width='150' />
                    </Link>
                })}
            </div>
        </>
    )
}

export default Products;
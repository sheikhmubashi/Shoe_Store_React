import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{textAlign: 'center',display: 'flex', justifyContent: 'space-around', textDecoration: 'none', fontSize: '30px'}}>
            <Link to='/'>Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/products'>Products </Link>
        </div>
    )
}

export default Navbar;
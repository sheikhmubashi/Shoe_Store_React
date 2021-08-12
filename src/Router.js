import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsItems from './components/ProductsItems';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';


const RouterConfig = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/products' component={Products} />
                    <Route path='/ProductsItems/:id' component={ProductsItems} />
                    <Route path='*' component={() => { return <h1>404 Not Found</h1> }} />

                </Switch>
            </Router>

        </div>
    );
}

export default RouterConfig;

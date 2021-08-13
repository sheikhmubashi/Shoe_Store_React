// import React from 'react'
// import Home from './components/Home';
// import About from './components/About';
// import Products from './components/Products';
// import ProductsItems from './components/ProductsItems';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Navbar from './components/Navbar';


// const RouterConfig = () => {
//     return (
//         <div>
//             <Router>
//                 <Navbar />
//                 <Switch>
//                     <Route exact path='/' component={Home} />
//                     <Route path='/about' component={About} />
//                     <Route exact path='/products' component={Products} />
//                     <Route path="/products/:id" component={ProductsItems}/>
//                     <Route path='*' component={() => { return <h1>404 Not Found</h1> }} />

//                 </Switch>
//             </Router>

//         </div>
//     );
// }

// export default RouterConfig;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Products';
import ProductItem from './components/ProductsItems';
import NavBar from './components/Navbar';

function RouteConfig() {

  return (
	<div>
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route exact path="/products" component={Product}/>
                <Route path="/products/:id" component={ProductItem}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;
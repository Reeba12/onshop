import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as  Router,Switch, Route, Link, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import NavBar from "./components/Navbar";

import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import AddToCart from './components/AddToCartProduct';

function App() {
  return (
    <>
    {/* <NavBar /> */}
     <Router>
     <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/addproduct" element={<AddProduct/>}></Route>
          <Route path="/addtocart" element={<AddToCart/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          {/* <Route path="/product" element={<Products />}>
            
          </Route>
          <Route path="/products/:id" element={<SelectProduct />}>
            
          </Route> */}
          <Route path="/signup" element={<Signup />}>
            
          </Route>
          {/* <Route path="/mybasket" element={<Mybasket />}> 
          </Route> */}
          </Routes>
     </Router>
    </>
  );
}

export default App;

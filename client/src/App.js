import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import NavBar from "./components/Navbar";

import Dashboard from "./components/Dashboard";
// import Cart from './components/Cart';
import Products from "./components/Products";
import AddToCart from "./components/AddToCartProduct";
import ProductTable from "./components/ProductTable";
import Profile from "./components/Profile";
import Mybasket from "./components/Mybasket";
import Store from "./components/Store";
import CreateStore from "./components/CreateStore";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route  exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/addproduct" element={<AddProduct />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/addproduct" element={<AddProduct/>}></Route> */}
          <Route path="/addtocart/:id" element={<AddToCart />}></Route>
          <Route path="/cart" element={<ProductTable />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/mybasket/:id" element={<Mybasket />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/createstore" element={<CreateStore />}></Route>
          {/* <Route path="/product" element={<Products />}>
            
          </Route>
          <Route path="/products/:id" element={<SelectProduct />}>
            
          </Route> */}
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/mybasket" element={<Mybasket />}> 
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

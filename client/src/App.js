import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as  Router,Switch, Route, Link, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <>
     <Router>
     {/* <NavBar /> */}
     <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
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

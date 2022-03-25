import './App.css';
import { BrowserRouter as  Router,Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <>
     <Router>
     {/* <NavBar /> */}
     
          <Route path="/" exact element={<Home />}>
            
          </Route>
          <Route path="/login" element={<Login />}>
            
          </Route>
          {/* <Route path="/product" element={<Products />}>
            
          </Route>
          <Route path="/products/:id" element={<SelectProduct />}>
            
          </Route> */}
          <Route path="/sign-up" element={<Signup />}>
            
          </Route>
          {/* <Route path="/mybasket" element={<Mybasket />}> 
          </Route> */}
     </Router>
    </>
  );
}

export default App;

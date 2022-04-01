import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../redux/action/action";
// import Products from "./Products";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Home from "./Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Login from "./Login";
import Signup from "./Signup";
import "../App.css";
import { border } from "@mui/system";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const signAuth = useSelector((state) => state.addUser);

  useEffect(() => {
    console.log(signAuth?.state?.data?.user?.Role);
  }, [signAuth]);
  
  const history = useNavigate();
  const role = signAuth?.state?.data?.user?.Role;
  const storeCreator = [
    {
      to: "./dashboard",
      name: "Dashboard",
    },
    {
      to: "./store",
      name: "Store",
    },
    {
      to: "./products",
      name: "Products",
    },
  ];
  const User = [
    {
      to: "./products",
      name: "Products",
    },
    {
      to: "./cart",
      name: "cart",
    },
    // {
    //   to: "./appliedjobs",
    //   name: "Applied Jobs",
    // },
    {
      to: "./profile",
      name: "Profile",
    },
  ];
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(deleteUser(signAuth?.state?.data?.user?._id))
    navigate('/login')
  }
  // const signout = useSelector((state) => state.addUser);
  return (
    <>
      <Navbar style={{backgroundColor:"#4a138c"}} expand="lg">
        <Container fluid style={{margin:"0 25px"}}>
          <Nav.Link as={Link} to='/'>
          <Navbar.Brand href="#" className="topnavbar" style={{color:"#ffff"}}>
            OnShop
          </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            
              {role === "User"
                ? User.map((value) => (
                    <Nav.Link as={Link} to={value.to} style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}>
                      {value.name}
                    </Nav.Link>
                  ))
                : role === "StoreCreator"
                ? storeCreator.map((value) => (
                    <Nav.Link as={Link} to={value.to} style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}>
                      {value.name}
                    </Nav.Link>
                  ))
                // : role===""?
                // <Nav.Link as={Link} to="/signup" style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}>
                //       Sign Up
                //     </Nav.Link>
                //     <Nav.Link as={Link} to="/product" style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}>
                //       Product
                //     </Nav.Link>
                    :null
                }
              
              {
                role=="User"?                
                (
                  <>
                    <Nav.Link
                    style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}
                    
                    onClick={handleLogout}
                  >
                    Logout
                  </Nav.Link>
                  </>
                ):role === "StoreCreator" ? (
                  <>
                    <Nav.Link as={Link} to='/createstore'
                     
                      style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}
                    >
                      Create Store
                    </Nav.Link>
                    <Nav.Link
                    style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}
                    
                    onClick={handleLogout}
                  >
                    Logout
                  </Nav.Link>
                    </>
                    ):
                      <Nav.Link
                      // variant="white"
                      // onClick={showModal}
                      as={Link} to="/login"
                     
                      style={{ color:"#ffff",textDecoration:"none", margin:"0 12px "}}
                    >
                      <AccountCircleOutlinedIcon
                  style={( { marginRight: "10px" })}
                  />
                      LogIn
                    </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="white" style={{backgroungColor:"#fff",colr:"#ffff"}}>Search</Button> */}
               <button style={{backgroungColor:"#fff",color:"#4a138c",padding:"6px", border:"1px solid #ffff",borderRadius:"2px"}}>Search</button>
              </Form>
        </Container>
      </Navbar>
      {/* <Router> */}
      {/* <Navbar bg="warning" expand="lg" className="shadow-sm">
        <Container fluid className="position-relative">
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                Shop
              </Nav.Link>
            </Nav>

            <Form className="d-flex me-4 position-absolute ">
                <FormControl
                  type="search"
                  placeholder="Search"
                  // className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
            <Nav.Link as={Link} to="/Mybasket" className="text-dark">
              
              Card(0)
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-dark">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
              <AccountCircleOutlinedIcon
                style={({ color: "black" }, { marginleft: "10px" })}
                />
              Sign In
            </Nav.Link>
                </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product">
            <Product />
          </Route> 
          <Route path="/sign-up">
            <Signup />
          </Route>
      */}

      {/* </Router>  */}
    </>
  );
};

export default NavBar;

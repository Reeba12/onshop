import React, { useEffect ,useState} from "react";
import { Button } from "react-bootstrap";
import Lottie from "lottie-react";
import '../App.css';
// import sideimg from "../images/sideimg1.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Products from "./Products";
import ecommerceshop from '../images/98481-e-commerce-shop-online.json'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footerpage from "./Footer"
import NavBar from "./Navbar";
import Dashboard from "./Dashboard";
import Outlet from "./Outlet"
import axios from "axios";

const Home = () => {
  axios.get('http://localhost:4000/login').then((res)=>{
    console.log(res.data.role,'role-->')
  })
  const [check, setcheck] = useState("user")
  return (
    <>
    <NavBar />
      <Container maxWidth="md" className="square border border-warning">
        <Box sx={{ width: "100%" }}>
          
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} mt={5}>
              <h4>New Collection</h4>
              <h1>WELCOME TO OnSHOP</h1>

              <Link to="/product" variant="body2">
                <Button
                  style={{
                    width: 150,
                    maxWidth: "100%",
                    color: "#fffff",
                  }}
                  variant="warning"
                  type="submit"
                >
                  Shop Now
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
            <Lottie animationData={ecommerceshop} />
            </Grid>
          </Grid>
        </Box>
        {
          check?<Outlet/>:<Dashboard/>
        }
      </Container> 
      <br/><br/>
      {/* <Switch>
        <Route path="/product">
          <Products />
        </Route>
      </Switch> 
      <Products />*/}
      <Footerpage />
    </>
  );
};

export default Home;

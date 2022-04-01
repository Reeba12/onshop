import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Card, Typography } from "@mui/material";
import '../App.css'
import { fontFamily } from "@mui/system";
import Cards from "./AddToCartProduct";
import ProductTable from "./ProductTable";
import { NavLink } from "react-router-dom";


const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={1}>
        {/* <Grid item xs={3}  sx={{ backgroundColor: "#2c2c2e", color: "#ffff" , justifyContent:"center"}}>
          <Typography 
      
             variant="h2"
             sx={{ backgroundColor: "#2c2c2e", color: "#ffff",margin:"1em" ,fontFamily:"Righteous", }}
           >
             Dashboard
           </Typography>
           <Box className="sidebar">
             <a href="#" sx={{}}>Products</a>
             <br />
             <a href="#" sx={{}}>Link 2</a>
             <br />
             <a href="#" sx={{}}>Link 3</a>
           </Box>
         </Grid> */}
         <Grid item xs={12}>
     
          <NavLink to='/addproduct'>
          <Button variant="outlined">Add Product</Button>
          </NavLink>
          <br />
          <br />
          <ProductTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {  Form } from "react-bootstrap";
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Signup = () => {

  const [user, setUser] = useState({
    fname: "",
    cnic: "",
    email:"",
    password:"",
    cpassword:"",
    role:""
  })
  const handleinput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    
  }



const Postdata =async (e) =>{
  e.preventDefault();
  console.log(user)
  await axios.post(`http://localhost/4000/signup`,{
    fname: user.fname,
    cnic: user.cnic,
    email: user.email,
    password:user.password,
    cpassword:user.cpassword,
    role:user.role
  })
  .then(res => console.log(res.data))


}
  return (
    <>
     
      {/* <Paper elevation={0} /> */}
     
    
    {/* <h3>{user}</h3> */}
      <Container sx={{ my: "1rem" }}>
      <Paper
          sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            boxShadow: 4,
            p: 5,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
  
        <Form>
      <h1>Sign Up</h1>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
      onChange={handleinput}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="role"
      >
        <FormControlLabel value="User" control={<Radio />} label="User" />
        <FormControlLabel value="StoreCreator" control={<Radio />} label="Store Creator" />
      </RadioGroup>
    </FormControl>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="First name"
              variant="outlined"
              size="medium"
              name="fname"
              value={user.name}
              onChange={handleinput}
            />
            </Form.Group><br />
             <Form.Group className="mb-3" controlId="formBasicLastname">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="CNIC"
              variant="outlined"
              size="large"
              name="cnic"
              value={user.cnic}
              onChange={handleinput}
            />
          </Form.Group><br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="large"
              name="email"
              value={user.email}
              onChange={handleinput}
            />
          </Form.Group><br />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="large"
              name="password"
              value={user.password}
              onChange={handleinput}
            />
          </Form.Group><br />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              sx={{ width: 400, maxWidth: "100%" }}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              name="cpassword"
              value={user.cpassword}
              onChange={handleinput}
            />
          </Form.Group><br />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
            <Form.Text className="text-muted">
              We'll keep you signed in on this device. You may be asked <br />{" "}
              to enter your password when modifying sensitive account
              information.
            </Form.Text>
          </Form.Group><br />
          <Button variant="contained" onClick={Postdata}>Submit</Button>
        </Form>
        </Paper>
      </Container>
      
    </>
  );
};

export default Signup;

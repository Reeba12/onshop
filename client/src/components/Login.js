import React from "react";
import Lottie from "react-lottie";
import animationData from "../images/93385-login.json";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { User } from "../redux/action/action";
import axios from "axios";
// import {usehistory}

// import Signup from "./Signup";
const Login = (props) => {
  const dispatch=useDispatch()
  const [values, setValues] = React.useState({
    cnic: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const history = useNavigate();
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const userData = {
    cnic: values.cnic,
    email: values.email,
    password: values.password,
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(userData, "USER DATA ==>>>");
    if (
      axios
        .post("http://localhost:4000/login", {
          cnic: values.cnic,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log("token response", res);
          dispatch(User(res.data))
        }).catch((er)=>{
          console.log("er response", er);

        })
    ) {
      // const data=res.json()
      // console.log(data)
    }
    history("/");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Container sx={{ mt: 2, display: "flex" }}>
        <Lottie options={defaultOptions} width={500} height={500} />
        <Paper
          sx={{
            textAlign: "center",
            boxShadow: 5,
            p: 4,
            margin: "auto",
            maxWidth: 450,
            flexGrow: 2,
            display: "flex",
            // backgroundColor: "#4a138c",
            // backgroundColor: (theme)
            //   theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
          <form onSubmit={handlesubmit}>
            <h1 style={{ color: "#4a138c" }}>Log in to your Account</h1>

            <FormControl>
              <TextField
                required
                id="outlined-basic"
                label="CNIC"
                type="text"
                autoComplete="current-text"
                variant="outlined"
                margin="normal"
                name="cnic"
                value={values.cnic}
                onChange={handleChange}
              />
              <br />
              <TextField
                required
                id="outlined-basic"
                label="Email"
                type="email"
                autoComplete="current-text"
                variant="outlined"
                margin="normal"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <br />
              <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-text"
                variant="outlined"
                margin="normal"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              <br />
              {/* <Form.Check type="checkbox" label="Remember me" /> */}
              <FormHelperText>
                We'll keep you signed in on this device. You may be asked to
                enter your password when modifying sensitive account
                information.
              </FormHelperText>
            </FormControl>
            <br />
            <br />
            <Button
              sx={{ backgroundColor: "#4a148c" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Link to="/signup" variant="body2">
              <p style={{ fontSize: "0.8em" }}>
                Not have an account ? Sign up here <br />
              </p>
            </Link>
          </form>
        </Paper>
      </Container>

      {/* 
      <Switch>
        <Route path="/sign-up">
          <Signup />
        </Route>
      </Switch> */}
    </>
  );
};

export default Login;

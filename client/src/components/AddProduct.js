import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const AddProduct = () => {
  // const [data, setData] = useState([])
  const [img, setImg] = useState({
    img: "",
  });
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    Date: "",
    price: "",
    image: "",
  });
  const handleChange = (event) => {
    console.log({ [event.target.name]: event.target.value });
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImgChange = (event) => {
    // setImg({ [event.target.name]: [event.target.value] });
    // setImg({...img,[event.target.name]:[ event.target.file]})
    // console.log({ [event.target.name]: [event.target.file] });
    setImg(event.target.files)
    console.log(img)

   
  };
  // const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const allData = { ...Input, value, id: new Date().getTime().toString() }
    // console.log(allData)

    // data.push(allData)

    // setData([...data])
    // dispatch(User(Input,value))

    alert("Product added  Successfully");
    axios.post("http://localhost:4000/addproduct", {
      name: product.name,
      date: product.date,
      desc: product.desc,
      image: product.image,
      price: product.price,
    });
    const formData=new FormData()
    formData.append("files",img)
    console.log(formData)
    setProduct({
      name: "",
      desc: "",
      Date: "",
      price: "",
      image: "",
    });
  };
  return (
    <>
      <Box>
        <Paper
          sx={{
            textAlign: "center",
            boxShadow: 5,
            p: 4,
            margin: "30px auto",
            maxWidth: 450,
            // flexGrow: 2,
            // display: "flex",
            // backgroundColor: "#4a138c",
            // backgroundColor: (theme)
            //   theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
          {/* import React from 'react'; */}

          <h3 style={{ color: "#4a138c", fontFamily: "Righteous" }}>
            ADD PRODUCT
          </h3>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                required
                id="standard-password-input"
                label="Product Name"
                type="text"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={product.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Product Description"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.desc}
                name="desc"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Product Price"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.price}
                name="price"
                onChange={handleChange}
              />
              {/*               
              <TextField
                required
                fullWidth
                id="standard-password-input"
                label="GovWin ID"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.govwinId}
                name="govwinId"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Opportunity Overview/Description"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.opportunityDesc}
                name="opportunityDesc"
                onChange={handleChange}
              /> */}
              <TextField
                required
                id="standard-password-input"
                type="date"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.Date}
                name="Date"
                onChange={handleChange}
              />

              <TextField
                required
                id="standard-password-input"
                accept="image/*"
                type="file"
                // value={img.img}
                margin="normal"
                // name="img"
                onChange={(event)=>{
                  setImg(event.target.files)
                  console.log(img)
                }}
              />
            </FormControl>
            <br />
            <br />

            <Button
              variant="contained"
              type="submit"
              endIcon={<SendSharpIcon />}
            >
              Add
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default AddProduct;

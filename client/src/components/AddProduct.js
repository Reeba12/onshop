import React from 'react'
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const AddProduct = () => {
  return (
      <>
        <Box>
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
        >addproduct</Paper>
        </Box>
      </>
  )
}

export default AddProduct
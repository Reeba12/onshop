import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import React from "react";
import "../App.css";

const Cards = ({ title, Cases, Total, colors }) => {
  return (
    <>
      <Card className="Boxinfo" variant="outlined">
        <div style={{ backgroundColor: `${colors}`, height: "10px" }}></div>
        <CardContent className="Box">
          <Typography className="Box__title" variant="h5">
            {/* {title} */}
            Products
          </Typography>
          <Typography>Profit</Typography>
          <h2 className="Box__cases" style={{ color: `${colors}` }}>
            +{Cases}
          </h2>
          <Typography className="Box__total">{Total} total</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Cards;
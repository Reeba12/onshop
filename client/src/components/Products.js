import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../App.css'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";





const Products = () => {
  const [productData,setProductData] = useState([])
  const [loading, setloading] = useState(false);
  const [filter, setfilter] = useState(productData);
  
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response)=>{
    setProductData(response.data)
    // setfilter( response.data);
    // console.log(filter)
    // setloading(false);
    // console.log(response.data)
  })
    // console.log(productData)
  }, [])
  // const Filterproduct = (selectedcategory) => {
  //   const updatelist = productData.filter(
  //     (x) => x.category === selectedcategory
  //   );
  //   setfilter(updatelist);
  // };





//   {filter.map((pro) => {
//     return (
//       <>
//         <div className="col-md-3 mb-2">
//           <Card
//             className="h-100 p-4 square border text-center"
//             key={pro.id}
//           >
//             <Card.Img
//               className="card-img"
//               variant="top"
//               src={pro.image}
//             />
//             <Card.Body className="card-body">
//               <Card.Title className="fw-bolder">
//                 {pro.title.substring(0, 12)}
//               </Card.Title>
//               <Card.Text>${pro.price}</Card.Text>
//               <NavLink to={`/products/${pro.id}`}>
//                 <Button variant="warning">Buy Now</Button>
//               </NavLink>
//             </Card.Body>
//           </Card>
//         </div>
//       </>
//     );
//   })}
// </>
// );
// };




  return (
    <>

<Grid container spacing={2}>
    <Grid item xs={12}>
    <Typography variant="h1" component="h1" sx={{fontFamily:'Righteous',textAlign:"center" ,color:"#4a138c"}}>
    OUTLETS
</Typography><br /><br/>
    <div className="d-flex align-item-center justify-content-center mb-5 pb-5">
    {/* <h3>Categories</h3><br/> */}
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => {
            //       setfilter(productData);
            // }}
          >
            All
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("men's cloth")}
          >
            Men's Collection
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("women's cloth")}
          >
            Women's Collection
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("jewelery")}
          >
            Jwelllery
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("electronics")}
          >
            {/* Electronics */}
          </div>
        </div>
        <br/><br/>
        
    <Container sx={{fontFamily:'Righteous' ,display:"grid"}}>
{/* <div className="row justify-content-center "> */}
    {/* <div className="col-md-3 mb-2"> */}
    {
      productData.map((i,key)=>{
        return(
          <>

    <Card sx={{ maxWidth: 345 ,border:"1px solid #4a138c"}}>
      <CardHeader
   sx={{fontFamily:'Righteous'}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title={i.productName}
        subheader="September 14, 2016"
      />
      <Typography variant="h4" sx={{fontFamily:'Righteous',marginLeft:"10px",color:"#4a138c"}}>
        
        {i.productName}
        </Typography>
      <Typography variant="h4"sx={{fontFamily:'Righteous',marginLeft:"10px",color:"#4a138c"}}>
        
      {i.productcategory}
      </Typography>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{color:"#4a138c", fontFamily:"Righteous"}}>
          {i.productDesc}
        </Typography>
        <Typography variant="h3" sx={{color:"#4a138c", fontFamily:"Righteous"}}>
          {i.productPrice}
        </Typography>
      </CardContent>
      
    </Card>
    <br />
          </>
        )
      })
    }
    
 {/* </div> */}
 </Container>
          
        {/* </div> */}
  </Grid>
  
</Grid>
    </>
  )
}
export default Products
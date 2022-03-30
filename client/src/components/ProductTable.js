import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ProductTable = () => {
    // function createData(
    //     name: string,
    //     calories: number,
    //     fat: number,
    //     carbs: number,
    //     protein: number,
    //   ) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    // const deleteData=(key)=>{
    //   axios.delete(`http://localhost:4001/delete/${key}`)
    //   }
    //   const editData=(key)=>{
    //     console.log(key)
    //     axios.get(`http://localhost:4001/new/${key}`).then((response)=>{
    //       console.log(response.data[0])
    //       setUpdatedData({
    //         key:response.data[0]._id,
    //         clientAgency: response.data[0].clientAgency,
    //         email: response.data[0].email,
    //         name: response.data[0].name,
    //         uniqueIdentifier: response.data[0].uniqueIdentifier,
    //         govwinId: response.data[0].govwinId,
    //         opportunityDesc: response.data[0].opportunityDesc,
    //         anticipatedSubDate: response.data[0].anticipatedSubDate,
    //         leadAndSupport: response.data[0].leadAndSupport,
    //         personName:response.data[0].personName,
    //         Inputdate:response.data[0].Inputdate
    //       })
    //     })
    //     setShow(true)
    //   }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Product Name</TableCell>
          <TableCell align="right">Product IMG</TableCell>
          <TableCell align="right">Product Description</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Product Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ProductTable
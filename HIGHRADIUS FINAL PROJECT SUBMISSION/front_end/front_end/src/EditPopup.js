

import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect , useState } from 'react'
import Axios from "axios";
import {  Grid, Stack, TextField } from "@mui/material";
import { fetchData, Urls } from './Utility';


//Common styling for the edit text field
const formStyle = [
  { '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
     height:"-webkit-fill-available",
  },
    color: "black",
    backgroundColor: "white",
    padding: "-2px 0px -2px",
    borderRadius: "7px",
    height: "40px",
    width: "250px",
  }
];


// Edit Popup
export default function EditPopup(props) {
    const {title,children,openEditPopup,setOpenEditPopup,valueofsl_no, trackId, setTableData } = props;
    // const url="http://localhost:8080/HRC/EditServlet?";

    const [data, setData]=useState({
      invoice_currency:"",
      cust_payment_terms:"",
    })

    function handle(e){
       const newdata={...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)
    }
    const submit = async (e) =>{
      console.log("Working")
      e.preventDefault();
      var topass="invoice_currency="+data.invoice_currency+"&cust_payment_terms="+data.cust_payment_terms+"&sl_no="+trackId[0];
      await fetchData(Urls.edit + topass); // edit
      let fdata = await fetchData(Urls.fetch); // fetch updated data
      setTableData(fdata);

      setOpenEditPopup(false);
        // await Axios.get(url+topass)
        // .then(res=>{
        //   console.log(res.data)
        // })
        // if(valueofsl_no.length!=1)
        // {console.log("galat hai")
        // console.log(valueofsl_no.length)
        // }
        // else {
        
        // }
        //console.log(topass)
    } 
   
  return (
    <div >
    <Dialog open={openEditPopup} maxWidth="lg">
       <DialogTitle style={{ color: "white", backgroundColor: "#2a3e4c" }}>
       <div>Edit</div>
       </DialogTitle>
       <DialogContent style={{ color: "white", backgroundColor: "#2a3e4c" }}>
        <div >
        <form>
        <Grid container >
            <Grid item x6={6}>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="invoice_currency" value={data.invoice_currency} variant="outlined" label="Invoice Currency" sx={formStyle} > </TextField>
            <TextField onChange={(e)=>handle(e)} id="cust_payment_terms" value={data.cust_payment_termsr} variant="outlined" label="Customer Payment Terms" sx={formStyle}/>
            </Stack>
            <br/>      
            </Grid>
        </Grid>
        {/* onClick={(e)=>submit(e)} */}
            <Button variant="outlined" onClick={submit} style={{width:"48%",color:"white", borderColor:"white"}}>EDIT</Button>
            <Button variant="outlined" onClick={()=>setOpenEditPopup(false)} style={{width:"48%",color:"white", borderColor:"white", marginLeft:"15px"}}>Cancel</Button>
        
    </form>
    </div>
    </DialogContent>
       
    </Dialog>
    </div>
  )
}



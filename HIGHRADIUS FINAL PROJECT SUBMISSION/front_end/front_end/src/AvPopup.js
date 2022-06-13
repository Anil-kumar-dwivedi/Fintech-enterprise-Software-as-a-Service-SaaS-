import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect , useState } from 'react'
import Axios from "axios";
import {  Grid, Stack, TextField } from "@mui/material";

// Common Styling
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


// Analytics Popup 
export default function AvPopup(props) {
    const {title,children,openAvPopup,setOpenAvPopup,trackId} = props;
    const url="http://localhost:8080/HRC_final/AvServlet?";
    
    const [data, setData]=useState({
        doc_id:"",
        cust_number:"",
        invoice_id:"",
        buisness_year:"",
    })
   

    function handle(e){
       const newdata={...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)
    }

    const submit = async (e) => {
      var topass="doc_id="+data.doc_id+
      "&cust_number="+data.cust_number+"&invoice_id="+data.invoice_id+"&buisness_year="+data.buisness_year;
        e.preventDefault();
        await Axios.get(url+topass)
        .then(res=>{
          console.log(res.data)
        })     
     
    } 
    
  return (
    <div>
    <Dialog open={openAvPopup} maxWidth="lg">
       <DialogTitle style={{ color: "white", backgroundColor: "#2a3e4c" }}>
       <div>Analytics View</div>
       </DialogTitle>
       <DialogContent style={{ color: "white", backgroundColor: "#2a3e4c" }}>
        <div >
        <Stack direction="row" spacing={24} >   
        <div>Clear Date</div>
        <div>Due Date</div>
        </Stack>
        <form>
        <Grid container >
            <Grid item x6={6}>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="clear_date" type={"Date"} value={data.clear_date} variant="outlined" label="From" sx={formStyle} > </TextField>
            <TextField onChange={(e)=>handle(e)} id="due_date" type={"Date"} value={data.due_date} variant="outlined" label="From" sx={formStyle} > </TextField>
            </Stack>
            <br/>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="clear_date1" type={"Date"} value={data.clear_date1} variant="outlined" label="To" sx={formStyle} > </TextField>
            <TextField onChange={(e)=>handle(e)} id="due_date1" type={"Date"} value={data.due_date1} variant="outlined" label="To" sx={formStyle} > </TextField>
            </Stack>
            <br/>
            <br/>
            <Stack direction="row" spacing={15} >
            <div>Baseline Create Date</div>
            <div>Invoice Currency</div>
            </Stack>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="baseline_create_date" type={"Date"} value={data.baseline_create_date} variant="outlined" label="From" sx={formStyle}/>
            <TextField onChange={(e)=>handle(e)} id="invoice_currency" value={data.baseline_create_date} variant="outlined" label="Invoice Currency" sx={formStyle}/>
            </Stack>
            <br/>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="baseline_create_date1" type={"Date"} value={data.baseline_create_date1} variant="outlined" label="To" sx={formStyle}/>
            </Stack>   
            <br/>
            <br/>
            </Grid>
        </Grid>
            <Button variant="outlined" onClick={submit} style={{width:"48%",color:"white", borderColor:"white"}}>Submit</Button>
            <Button variant="outlined" onClick={()=>setOpenAvPopup(false)} style={{width:"48%",color:"white", borderColor:"white", marginLeft:"15px"}}>Cancel</Button>
        
    </form>
    </div>
    </DialogContent>
       
    </Dialog>
    </div>
  )
}
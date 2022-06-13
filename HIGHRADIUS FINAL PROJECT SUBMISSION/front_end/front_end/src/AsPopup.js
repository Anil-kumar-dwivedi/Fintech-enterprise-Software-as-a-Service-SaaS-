import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect , useState } from 'react'
import Axios from "axios";
import {  Grid, Stack, TextField } from "@mui/material";
import { Urls, fetchData } from './Utility.js';


  //Common Styling 
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


// Advanced Search PopUp

export default function AsPopup(props) {
    const {title,children,openAsPopup,setOpenAsPopup,trackId,setTableData} = props;
    
    // use state to store the entered value in textfield
    const [data, setData]=useState({
        doc_id:"",
        cust_number:"",
        invoice_id:"",
        buisness_year:"",
    })

     // handle function to map the id with the values
    function handle(e){
       const newdata={...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)
    }

    //submit button functionalities    
    const submit = async (e) => {
      e.preventDefault();
      var topass="doc_id="+data.doc_id+"&cust_number="+data.cust_number+"&invoice_id="+data.invoice_id+"&buisness_year="+data.buisness_year;
      let fdata = await fetchData(Urls.advanceSearch + topass); // advance search
      console.log(fdata)
      setTableData(fdata); 
      setOpenAsPopup(false);
    } 
    
  return (
    <div >
    <Dialog open={openAsPopup} maxWidth="lg">
       <DialogTitle style={{ color: "white", backgroundColor: "#2a3e4c" }}>
       <div>Advance Search</div>
       </DialogTitle>
       <DialogContent style={{ color: "white", backgroundColor: "#2a3e4c" }}>
        <div >
        <form>
        <Grid container >
            <Grid item x6={6}>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="doc_id" value={data.doc_id} variant="outlined" label="Documnet Id" sx={formStyle} > </TextField>
            <TextField onChange={(e)=>handle(e)} id="invoice_id" value={data.invoice_id} variant="outlined" label="Invoice Id" sx={formStyle} > </TextField>
            <br/>
            <br/>
            <br/>
            </Stack>
            <Stack direction="row" spacing={2} >
            <TextField onChange={(e)=>handle(e)} id="cust_number" value={data.cust_number} variant="outlined" label="Customer Number" sx={formStyle}/>
            <TextField onChange={(e)=>handle(e)} id="buisness_year" value={data.buisness_year} variant="outlined" label="Buisness Year" sx={formStyle}/>
            </Stack>
            <br/>      
            </Grid>
        </Grid>
             {/* // Search and Cancel Button */}
            <Button variant="outlined" onClick={submit} style={{width:"48%",color:"white", borderColor:"white"}}>Search</Button>
            <Button variant="outlined" onClick={()=>setOpenAsPopup(false)} style={{width:"48%",color:"white", borderColor:"white", marginLeft:"15px"}}>Cancel</Button>
        
    </form>
    </div>
    </DialogContent>
       
    </Dialog>
    </div>
  )
}
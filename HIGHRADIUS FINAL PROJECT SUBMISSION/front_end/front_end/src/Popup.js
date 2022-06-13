import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Grid, Stack, TextField } from "@mui/material";
import { fetchData, Urls } from './Utility';
  

//Common styling 
const formStyle = [
  {
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      height: "-webkit-fill-available",
    },
    color: "black",
    backgroundColor: "white",
    padding: "-2px 0px -2px",
    borderRadius: "7px",
    height: "40px",
    width: "250px",
  }
];


// this is the popup fuction to add the data in Database
export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup, setTableData } = props;
  const url = "http://localhost:8080/HRC/AddServlet?";


  
  const [data, setData] = useState({
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  })


  // Function to store the textfield input to the respective id
  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }



  const submit = async (e) => {
    e.preventDefault();
    Axios.get(url + topass)
      .then(res => {
        console.log(res.data)

      })
    setOpenPopup(false);
    
  }

  // data to send with the url
  var topass = "business_code=" + data.business_code +
    "&cust_number=" + data.cust_number +
    "&clear_date=" + data.clear_date +
    "&buisness_year=" + data.buisness_year +
    "&doc_id=" + data.doc_id +
    "&posting_date=" + data.posting_date +
    "&document_create_date=" + data.document_create_date +
    "&due_in_date=" + data.due_in_date +
    "&invoice_currency=" + data.invoice_currency +
    "&document_type=" + data.document_type +
    "&posting_id=" + data.posting_id +
    "&total_open_amount=" + data.total_open_amount +
    "&baseline_create_date=" + data.baseline_create_date +
    "&cust_payment_terms=" + data.cust_payment_terms +
    "&invoice_id=" + data.invoice_id;

  return (
    <div >
      <Dialog open={openPopup} maxWidth="lg">
        <DialogTitle style={{ color: "white", backgroundColor: "#2a3e4c" }}>
          <div>Add</div>
        </DialogTitle>
        <DialogContent style={{ color: "white", backgroundColor: "#2a3e4c" }}>
          <div >
            <form>
              <Grid container >
                <Grid item x6={6}>
                  <Stack direction="row" spacing={2} >
                    <TextField onChange={(e) => handle(e)} id="business_code" value={data.business_code} variant="outlined" label="Business Code" sx={formStyle} > </TextField>
                    <TextField onChange={(e) => handle(e)} id="cust_number" value={data.cust_number} variant="outlined" label="Customer Number" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="clear_date" value={data.clear_date} variant="outlined" type={"Date"} label="Clear Date" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="buisness_year" value={data.buisness_year} variant="outlined" label="Business Year" sx={formStyle} />
                  </Stack>
                  <br />
                  <Stack direction="row" spacing={2}>
                    <TextField onChange={(e) => handle(e)} id="doc_id" value={data.doc_id} variant="outlined" label="Document Id" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="posting_date" value={data.posting_date} type={"Date"} variant="outlined" label="Posting Date" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="document_create_date" value={data.document_create_date} type={"Date"} variant="outlined" label="Document Create Date" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="due_in_date" value={data.due_in_date} variant="outlined" type={"Date"} label="Due Date" sx={formStyle} />
                  </Stack>
                  <br />
                  <Stack direction="row" spacing={2}>
                    <TextField onChange={(e) => handle(e)} id="invoice_currency" value={data.invoice_currency} variant="outlined" label="Invoice Currency" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="document_type" value={data.document_type} variant="outlined" label="Document Type" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="posting_id" value={data.posting_id} variant="outlined" label="Posting Id" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="total_open_amount" value={data.total_open_amount} variant="outlined" label="Total Open Amount" sx={formStyle} />
                  </Stack>
                  <br />
                  <Stack direction="row" spacing={2}>
                    <TextField onChange={(e) => handle(e)} id="baseline_create_date" value={data.baseline_create_date} variant="outlined" type={"Date"} label="Baseline Create Date" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="cust_payment_terms" value={data.cust_payment_terms} variant="outlined" label="Customer Payment Terms" sx={formStyle} />
                    <TextField onChange={(e) => handle(e)} id="invoice_id" value={data.invoice_id} variant="outlined" label="Invoice Id" sx={formStyle} />
                  </Stack>
                  <br />

                </Grid>
              </Grid>
              <Button onClick={(e) => submit(e)} variant="outlined" style={{ width: "50%", color: "white", borderColor: "white" }}>ADD</Button>
              <Button variant="outlined" onClick={() => setOpenPopup(false)} style={{ width: "50%", color: "white", borderColor: "white" }}>Cancel</Button>

            </form>
          </div>
        </DialogContent>

      </Dialog>
    </div>
  )
}



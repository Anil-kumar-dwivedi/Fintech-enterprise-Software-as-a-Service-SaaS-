import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Grid, Stack, TextField } from "@mui/material";
import { fetchData, Urls } from './Utility';



export default function DeletePopup(props) {
    const { title, children, openDeletePopup, setOpenDeletePopup, trackId, setTableData } = props;
   
    const [data, setData] = useState({
        sl_no: ""
    })

    
    const submit = async (e) => {
        e.preventDefault();
        var topass = "sl_no=" + trackId;
         await fetchData(Urls.delete + topass); // delete
        let data = await fetchData(Urls.fetch); // fetch updated data
        setTableData(data);
        setOpenDeletePopup(false)
    }

    return (
        <div >
            <Dialog open={openDeletePopup} maxWidth="lg">
                <DialogTitle style={{ color: "white", backgroundColor: "#2a3e4c" }}>
                    <div>Delete Records ?</div>
                </DialogTitle>
                <DialogContent style={{ backgroundColor: "#2a3e4c" }}>
                    <div style={{ color: "white" }} > Are you sure you want to delete these record[s]? </div>
                    <br />
                    <div >
                        <Button onClick={() => setOpenDeletePopup(false)} variant="outlined" style={{ width: "48%", color: "white", borderColor: "white", marginRight: "10px" }}>CANCEL</Button>
                        <Button variant="outlined" onClick={submit} style={{ width: "48%", color: "white", borderColor: "white" }}>DELETE</Button>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    )
}
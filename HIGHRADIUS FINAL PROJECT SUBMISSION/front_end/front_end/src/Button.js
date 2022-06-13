import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { color, padding } from "@mui/system";
import { Icon } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { TextField } from "@mui/material";
import Popup from "./Popup";
import EditPopup from "./EditPopup";
import DeletePopup from "./DeletePopup";
import AsPopup from "./AsPopup";
import AvPopup from "./AvPopup";
import { fetchData, Urls } from './Utility';
export default function BasicButtons({ setTrackId, trackId, setTableData, SetSearchedData }) {

  const [openPopup, setOpenPopup]=React.useState(false);
  const [openEditPopup, setOpenEditPopup]=React.useState(false);
  const [openDeletePopup, setOpenDeletePopup]=React.useState(false);
  const [openAsPopup, setOpenAsPopup]=React.useState(false);
  const [openAvPopup, setOpenAvPopup]=React.useState(false);

  // Funtion used in search by customer id
  const filerOut = async (e) => {
    let queryText = e.target.value;
    let data = await fetchData(Urls.search + queryText);
     SetSearchedData(data);
  //  setTableData(data);
  }


  return (
    <>
    <Stack spacing={3} direction="row" sx={{ backgroundColor: "#283d49", padding: "25px" }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group">

           {/* -----------------------------PREDICT  BUTTON----------------------- */}
          <Button
            variant="contained"
            style={{
              borderWidth:"2px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              width:"170px"
            }}
          >
            PREDICT
          </Button>


          {/* -----------------------------ANALYTICS VIEW BUTTON----------------------- */}
          <Button
          onClick={()=>setOpenAvPopup(true)}
            variant="outlined"
            style={{
              borderWidth:"3px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              width:"170px"
            }}
          >
            ANALYTICS VIEW
          </Button>



         {/* -----------------------------ADVANCE SEARCH BUTTON----------------------- */}
          <Button
          onClick={()=>setOpenAsPopup(true)}
            variant="outlined"
            style={{
              borderWidth:"3px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              width:"170px"
            }}
          >
            ADVANCE SEARCH
          </Button>
        </ButtonGroup>


        {/* -----------------------------REFRESH ICON ----------------------- */}
        <Button
          variant="outlined"
          style={{
            borderWidth:"3px",
            maxWidth: "250px",
            maxHeight: "40px",
            color: "white",
            width:"80px"
          }}
          onClick={async () => setTableData(await fetchData(Urls.fetch)) }
        >
          <RefreshIcon  style={{color:"#1976d2"}} />
        </Button>


         {/* -----------------------------SEARCH BY CUSTOMER ID TEXTFIELD----------------------- */}
        <TextField
          onChange={filerOut }
         
          id="outlined-basic"
          label="SEARCH  CUSTOMER ID"
          variant="outlined"
          style={{
            minWidth: "200px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        />



        <ButtonGroup variant="outlined" aria-label="outlined button group">

           {/* -----------------------------ADD BUTTON----------------------- */}
          <Button
            onClick={()=>setOpenPopup(true)}
            variant="outlined"
            style={{
              borderWidth:"3px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              paddingLeft: "65px",
              paddingRight: "65px",
            }}
          >
            ADD
          </Button>


         {/* -----------------------------EDIT BUTTON----------------------- */}
          <Button
            onClick={()=>setOpenEditPopup(true)}
            variant="outlined"

            // use to enable the button  when  /* only 1 */ row is SELECTED 
            // button will be disable if 0 row selected or more than 1 row selected to edit
            disabled={trackId.length === 1 ? false : true}


            style={{
              borderWidth:"3px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              paddingLeft: "65px",
              paddingRight: "65px",
            }}
          >
            EDIT  
          </Button>


          {/* -----------------------------DELETE BUTTON----------------------- */}
          <Button
           onClick={()=>setOpenDeletePopup(true)}
            variant="outlined"

            // use to enable the button  when  /* atleast 1 */ row is SELECTED 
            // button will be disable if 0 row selected to delete
            disabled={trackId.length > 0 ? false : true}

            style={{
              borderWidth:"3px",
              maxWidth: "250px",
              maxHeight: "40px",
              color: "white",
              paddingLeft: "65px",
              paddingRight: "65px",
            }}
          >
            DELETE
          </Button>



        </ButtonGroup>
    </Stack>

    {/* For Add popup */}
    <Popup
    openPopup={openPopup}
    setOpenPopup={setOpenPopup}
    setTableData={setTableData}
    >
    </Popup>


    {/* For Edit Popup */}
    <EditPopup
    openEditPopup={openEditPopup}
    setOpenEditPopup={setOpenEditPopup}
    trackId={trackId}
    setTableData={setTableData}
    >
    </EditPopup>


     {/* For Delete Popup */}
    <DeletePopup
    openDeletePopup={openDeletePopup}
    setOpenDeletePopup={setOpenDeletePopup}
    trackId={trackId}
    setTableData={setTableData}
    >
    </DeletePopup>

    {/* For Advance Search Popup */}
    <AsPopup
    openAsPopup={openAsPopup}
    setOpenAsPopup={setOpenAsPopup}
    setTableData={setTableData}
    >
    </AsPopup>


    {/* For Analytics View Popup */}
    <AvPopup
    openAvPopup={openAvPopup}
    setOpenAvPopup={setOpenAvPopup}
    >
    </AvPopup>


    </>
  );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { height } from '@mui/system';
import logo from './logo.svg';
import abc from './Group 20399.svg'
export default function Header() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{
        backgroundColor:"#2d4250" ,
        height:"100px"
      }}>
        {/* <br/> */}
       <Typography variant='h4' mt={1} ml={4}>
       <img src={abc}/>
       <img src={logo} style={{ marginLeft:"300px" }}/>
       </Typography>   
       <Typography mt={1} ml={4}>
         Invoice List
       </Typography>        
      </AppBar>
    // </Box>
  );
}


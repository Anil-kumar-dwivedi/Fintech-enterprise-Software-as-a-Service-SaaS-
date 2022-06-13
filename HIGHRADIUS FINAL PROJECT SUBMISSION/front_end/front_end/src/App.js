import './App.css';
import Button from './Button'
import DataGrid from './DataGrid'
import Header from './Header.js'
import Footer from './Footer.js'
import { useState } from 'react';
import { setRef } from '@mui/material';

function App() {
 
  //Global useState
  const [trackId, setTrackId] = useState([]);
  const [tableData , setTableData] = useState([]);
  const [searchedData, SetSearchedData] = useState([]);


  return (
    <div className='container'>
      <Header/>
       <Button trackId={trackId} setTrackId={setTrackId} setTableData={setTableData} SetSearchedData={SetSearchedData}/> 
       <DataGrid trackId={trackId} setTrackId={setTrackId} tableData={searchedData.length > 0 ? searchedData : tableData} setTableData={setTableData}/>
      <Footer/>
    </div>
  );
}

export default App;

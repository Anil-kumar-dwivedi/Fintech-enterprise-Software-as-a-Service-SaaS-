import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchData, Urls } from './Utility';

const columns = [
  { field: 'sl_no', headerName: 'Sl no', width: 90 },
  {
    field: 'business_code',
    headerName: 'Business code',
    width: 130,
  },
  {
    field: 'cust_number',
    headerName: 'Customer number',
    width: 150,
  },
{
    field: 'clear_date',
    headerName: 'Clear Date',
    width: 150,
  },
  {
    field: 'buisness_year',
    headerName: 'Business year',
    width: 130,
  },
  {
    field: 'doc_id',
    headerName: 'Doc id',
    width: 150,
  },
  {
    field: 'posting_date',
    headerName: 'Posting date',
    width: 150,
  },
  {
    field: 'document_create_date',
    headerName: 'Document create date',
    width: 180,
  },
  {
    field: 'due_in_date',
    headerName: 'Due in date',
    width: 150,
  },
  {
    field: 'invoice_currency',
    headerName: 'Invoice Currency',
    width: 130,
  },
  {
    field: 'document_type',
    headerName: 'Document type',
    width: 130,
  },
  {
    field: 'posting_id',
    headerName: 'Posting id',
    width: 150,
  },
  {
    field: 'total_open_amount',
    headerName: 'Total open amount',
    width: 150,
  }, 
  {
    field: 'baseline_create_date',
    headerName: 'Baseline create date',
    width: 160,
  }, 
  {
    field: 'cust_payment_terms',
    headerName: 'Customer payment terms',
    width: 180,
  }, 
  {
    field: 'invoice_id',
    headerName: 'Invoice id',
    width: 150,
  },     
];

export default function DataGridDemo({ setTrackId, trackId, tableData, setTableData}) {
   
    const [pageSize, setPageSize] = React.useState(5);
   
  
    React.useEffect(async () => {
      let data = await fetchData(Urls.fetch);
      setTableData(data);
    } , [])
    
    // mapping fetched Data with the column field to show in the data grid 
    const rowData = tableData?.map(data => {
        return {
               
               sl_no: data?.sl_no,
               business_code: data?.business_code,
               cust_number: data?.cust_number,
               clear_date: data?.clear_date,
               buisness_year: data?.buisness_year,
               doc_id: data?.doc_id,
               posting_date: data?.posting_date,
               document_create_date: data?.document_create_date,
               due_in_date: data?.due_in_date,
               invoice_currency: data?.invoice_currency,
               document_type:data?.document_type,
               posting_id: data?.posting_id,
               total_open_amount: data?.total_open_amount,
               baseline_create_date: data?.baseline_create_date,
               cust_payment_terms: data?.cust_payment_terms,
               invoice_id: data?.invoice_id,
               id: data?.sl_no,
        };
    });
  
  return (
    <div style={{ height: 430, width: '100%' }} >
      <DataGrid
      sx={{
        backgroundColor:"#283d49" ,
        color:"white",
        '.css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar':{
          color: "white",
          
        },
        '.css-1l78o2o-MuiDataGrid-root':{
          border:"0px", 
        },        
        }}
        rows={rowData}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick

        // to get the serial number of the row
        onSelectionModelChange={ itm => setTrackId(itm)}
        
        
       //Pagination
       pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...rowData}
      />
     </div>
  );
}
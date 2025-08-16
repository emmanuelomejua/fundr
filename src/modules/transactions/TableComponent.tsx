'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { CircularProgress } from '@mui/material';
import { getTransactions } from '@/redux/slice/transaction/transactionSlice';

const columns: GridColDef[] = [
  { field: 'amount', headerName: 'Amount', width: 100 },
  { field: 'ID', headerName: 'TRANSACTION ID', width: 160 },
  { field: 'type', headerName: 'Transaction type', width: 120 },
  {
    field: 'date',
    headerName: 'DATE',
    type: 'string',
    width: 160,
  },
  {
    field: 'time',
    headerName: 'TIME',
    type: 'string',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    flex: 1,
    sortable: false,
    renderCell: (params) => (
        <div className={`flex items-center justify-center gap-1 rounded-2xl border-1 ${params.value === 'Processed' ? 'border-[#5DC090] ': 'border-[#F14156]'} w-[160px] h-[30px] mt-3`}>
            <div className={`w-[8px] h-[8px] rounded-2xl ${params.value === 'Processed' ? 'bg-[#92EF80]': 'bg-[#F14156]'}`}/>
            <span className={`${params.value === 'Processed' ? 'text-[#144909]': 'text-[#F14156]'} text-[13px] font-[500]`}> {params.value}</span>
        </div>
    )
  },
];


const paginationModel = { page: 0, pageSize: 7 };

export default function DataTable() {

    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.transactions);

    React.useEffect(() => {
        dispatch(getTransactions())
    }, [dispatch])

  return (
    <div className="hidden lg:flex lg:w-[1090px] mt-5 rounded-sm mx-auto bg-[#fff]">
        <Paper sx={{ height: 500, width: '100%', backgroundColor: '#FFFFFF' }}>
          {loading ?
            <div className="flex items-center justify-center w-full h-full bg-[#d5acac49]">
              <CircularProgress/>
            </div>:
          <DataGrid
              rows={data}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
              getRowId={(r) => r.ID}
          />}
        </Paper>
    </div>
  );
}


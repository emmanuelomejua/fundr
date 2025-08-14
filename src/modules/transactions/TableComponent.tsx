'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

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
        <div className={`flex items-center justify-center gap-1 rounded-2xl border-1 ${params.value === 'Processed' ? 'border-[#5DC090] ': 'border-[#F14156]'} w-[160px] h-[30px] mt-2`}>
            <div className={`w-[5px] h-[5px] rounded-2xl ${params.value === 'Processed' ? 'bg-[#92EF80]': 'bg-[#FEECEE]'}`}/>
            <span className={`${params.value === 'Processed' ? 'text-[#144909]': 'text-[#F14156]'} text-[9px] font-[500]`}> {params.value}</span>
        </div>
    )
  },
];

const rows = [
  { amount: '₦43,644', ID: 'TR_8401857902', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857903', type: 'Request', date: 'Feb 12, 2022', time: '10:30AM', status: 'Failed' },
  { amount: '₦43,644', ID: 'TR_8401857904', type: 'Deposit', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857908', type: 'Withdrawal', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857905', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857906', type: 'Deposit', date: 'Feb 12, 2022', time: '10:30AM', status: 'Failed' },
  { amount: '₦43,644', ID: 'TR_8401857907', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Failed' },
  { amount: '₦43,644', ID: 'TR_8401857909', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Failed' },
  { amount: '₦43,644', ID: 'TR_8401857910', type: 'Withdrawal', date: 'Feb 12, 2022', time: '10:30AM', status: 'Failed' },
  { amount: '₦43,644', ID: 'TR_8401857911', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857912', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857913', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857914', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
  { amount: '₦43,644', ID: 'TR_8401857915', type: 'Transfer', date: 'Feb 12, 2022', time: '10:30AM', status: 'Processed' },
];

const paginationModel = { page: 0, pageSize: 7 };

export default function DataTable() {

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true)
    })

    if(!mounted) return null

  return (
    <div className="hidden lg:flex lg:w-[1090px] mt-5 rounded-sm mx-auto bg-[#fff]">
        <Paper sx={{ height: 500, width: '100%', backgroundColor: '#FFFFFF' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
            getRowId={(r) => r.ID}
        />
        </Paper>
    </div>
  );
}


import React from 'react'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const Table = ({ data = [] }) => {
  return (
    <MuiTable sx={{ maxWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell>Значение %</TableCell>
          <TableCell>Цвет</TableCell>
          <TableCell>Вкл/Выкл</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(row => (
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{row.range}</TableCell>
            <TableCell>{row.color}</TableCell>
            <TableCell>{row.swich ? '✓' : 'x'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
    
  )
}

export default Table
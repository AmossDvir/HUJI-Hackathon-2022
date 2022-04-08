import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import { red } from '@mui/material/colors';



const Suggestions = ({ data }) => {
    const renderedRows = data.length > 0 ? data.map((row) => {return (
        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.min_till_doctor}</TableCell>
                            <TableCell align="right">{row.icon}</TableCell>
                            <TableCell align="right">{(Math.sqrt(Math.pow(row.north_loc-31773465,2)+Math.pow(row.east_loc-35196418,2))/10000).toFixed(4)}</TableCell>
                        </TableRow>
    )}) : <div>No Results</div>;

    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Emergency room</TableCell>
                        <TableCell align="right">Time to doctor&nbsp;(min)</TableCell>
                        <TableCell align="right"><AccessTimeFilledSharpIcon></AccessTimeFilledSharpIcon></TableCell>
                        <TableCell align="right">distance&nbsp;(km)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderedRows}
                </TableBody>
            </Table>
        </TableContainer>


    )
}

export default Suggestions

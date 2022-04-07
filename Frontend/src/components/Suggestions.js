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



const Suggestions = () => {

    function createData(name, timeToDoctor, icon, distance) {
        return { name, timeToDoctor, icon, distance };
    }

    const rows = [
        createData('Shaare Zedek Medical Crnter Emergency Room', 240 , <AccessTimeFilledSharpIcon sx={{ color: "red" }}></AccessTimeFilledSharpIcon>, 2.2),
        createData('Terem Romema Emergency Room' , 20, <AccessTimeFilledSharpIcon sx={{ color: "green" }}></AccessTimeFilledSharpIcon>,4.8),
        createData('Hadasa Har Hatsofim Emergency Room', 192 ,<AccessTimeFilledSharpIcon sx={{ color: "red" }}></AccessTimeFilledSharpIcon>, 10),
    ];
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.timeToDoctor}</TableCell>
                            <TableCell align="right">{row.icon}</TableCell>
                            <TableCell align="right">{row.distance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    )
}

export default Suggestions

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DropDownButton from '../Components/DropDownButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function AssetsTable() {
    const [assets, setAssets] = useState([]);


    useEffect(() => {
        axios
            .get('https://localhost:7197/Assets')
            .then((response) => {
                setAssets(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 500 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Counter Part</StyledTableCell>
                        <StyledTableCell align="center">Area</StyledTableCell>
                        <StyledTableCell align="center">Asset Type</StyledTableCell>
                        <StyledTableCell align="center">Tech. Type</StyledTableCell>
                        <StyledTableCell align="center">Capacity</StyledTableCell>
                        <StyledTableCell align="center">Start Date</StyledTableCell>
                        <StyledTableCell align="center">End Date</StyledTableCell>
                        <StyledTableCell align="center">State</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((data) => (
                        <StyledTableRow key={data.id}>
                            <StyledTableCell component="th" scope="row">{data.name}</StyledTableCell>
                            <StyledTableCell align="center">{data.counterPart}</StyledTableCell>
                            <StyledTableCell align="center">{data.area}</StyledTableCell>
                            <StyledTableCell align="center">{data.assetType}</StyledTableCell>
                            <StyledTableCell align="center">{data.technologyType}</StyledTableCell>
                            <StyledTableCell align="center">{data.capacity}</StyledTableCell>
                            <StyledTableCell align="center">
                                {new Date(data.contractStart).toLocaleDateString('en-GB')}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {new Date(data.contractEnd).toLocaleDateString('en-GB')}
                            </StyledTableCell>
                            <StyledTableCell align="center">{data.currentState}</StyledTableCell>
                            <StyledTableCell align="center"><DropDownButton /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AssetsTable;

import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AssetsTable = ({ data, updateAsset, handleDelete }) => {
  return (
    <TableContainer>
      <Table
        sx={{ width: "calc(100% - 40px)", margin: "0 auto" }}
        aria-label="customized table"
      >
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
          {data.map((data, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.counterPart}
              </StyledTableCell>
              <StyledTableCell align="center">{data.area}</StyledTableCell>
              <StyledTableCell align="center">{data.assetType}</StyledTableCell>
              <StyledTableCell align="center">
                {data.technologyType}
              </StyledTableCell>
              <StyledTableCell align="center">{data.capacity}</StyledTableCell>
              <StyledTableCell align="center">
                {new Date(data.contractStart).toLocaleDateString("en-GB")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {new Date(data.contractEnd).toLocaleDateString("en-GB")}
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.currentState}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="edit" onClick={() => updateAsset(data)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(data.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssetsTable;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import wilkiLogo from "../images/wilkiLogo.png";
import falconsLogo from "../images/falconsLogo.png";
import armiaLogo from "../images/armiaLogo.png";
import dukesLogo from "../images/dukesLogo.png";

function createData(standing, logo, name, g, w, l, pf, pa, pct) {
  return { standing, logo, name, g, w, l, pf, pa, pct };
}

const rows = [
  createData(1, wilkiLogo, "WILKI LODZKIE", 6, 5, 1, 154, 43, 0.84),
  createData(2, falconsLogo, "TYCHY FALCONS", 6, 5, 1, 132, 65, 0.84),
  createData(3, armiaLogo, "ARMIA POZNAN", 6, 3, 3, 102, 110, 0.50),
  createData(4, dukesLogo, "DUKES ZABKI", 6, 0, 6, 56, 231, 0.00),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>TEAM</TableCell>
            <TableCell align="right">G</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">PF</TableCell>
            <TableCell align="right">PA</TableCell>
            <TableCell align="right">PCT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.standing}</TableCell>
              <TableCell align="right"><img src={row.logo}/></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.g}</TableCell>
              <TableCell align="right">{row.w}</TableCell>
              <TableCell align="right">{row.l}</TableCell>
              <TableCell align="right">{row.pf}</TableCell>
              <TableCell align="right">{row.pa}</TableCell>
              <TableCell align="right">{row.pct}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

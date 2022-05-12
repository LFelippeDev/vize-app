import styled from '@emotion/styled';
import { Table, TableContainer, TableFooter, TableRow } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTable = styled(Table)`
  width: 100%;
`;

export const StyledTableRow = styled(TableRow)``;

export const StyledTableFooter = styled(TableFooter)`
  display: flex;
  justify-content: flex-end;
`;

export const StyledTableContainer = styled(TableContainer)`
  width: 70%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  box-shadow: 30px 30px 35px rgba(0, 0, 0, 0.25);
  border-radius: 2rem;
`;

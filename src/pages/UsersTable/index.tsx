import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useState, useCallback, useEffect } from 'react';
import { ManageToken } from '../../helpers/manageToken';
import { IUsersResponse, RequestsUser } from '../../services/requests/requests';
import {
  Container,
  StyledTable,
  StyledTableRow,
  StyledTableContainer,
} from './styles';

export const UsersTable = () => {
  const [users, setUsers] = useState<IUsersResponse>();
  const [page] = useState<number>(1);

  const getUsers = useCallback(async (page: number) => {
    const token = ManageToken.get();
    if (!token) return;

    const { data } = await RequestsUser.getUsers(page, token);

    if (data) setUsers(data);
  }, []);

  useEffect(() => {
    getUsers(page);
  }, [getUsers, page]);

  return (
    <Container>
      {users && (
        <StyledTableContainer>
          <StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Localização</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data.map((user) => (
                <StyledTableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.location}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      )}
    </Container>
  );
};

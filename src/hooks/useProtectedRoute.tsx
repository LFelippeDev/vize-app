import { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Loading } from '../components';
import { ManageToken } from '../helpers/manageToken';
import { UsersTable } from '../pages/UsersTable';
import { RequestsUser } from '../services/requests/requests';

export const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<'auth' | 'noAuth'>();
  const token = ManageToken.get();

  const getResponseStatus = useCallback(async () => {
    if (!token) return;

    const { status } = await RequestsUser.getUsers(1, token);

    const initNumberStatus = status.toString().slice(0, 1);

    if (initNumberStatus !== '2') setIsLoggedIn('noAuth');
    else setIsLoggedIn('auth');
  }, [token]);

  useEffect(() => {
    getResponseStatus();
  }, [getResponseStatus, token]);

  if (isLoggedIn === 'auth') return <UsersTable />;

  if (isLoggedIn === 'noAuth') return <Navigate to="/login" replace />;

  return <Loading />;
};

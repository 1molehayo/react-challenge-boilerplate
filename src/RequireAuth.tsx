import React, { useEffect } from 'react';
import useAuth from 'contexts/Auth.context';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

function RequireAuth({ children }: IProps) {
  const { authed, updateLoginStatus } = useAuth();
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      updateLoginStatus();
      // @ts-ignore
      navigate(state?.path || '/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authed) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace state={{ path: pathname }} />;
}

export default RequireAuth;

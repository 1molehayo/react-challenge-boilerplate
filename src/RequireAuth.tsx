import React, { useEffect, useState } from 'react';
import useAuth from 'contexts/Auth.context';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from 'components/loader';

interface IProps {
  children: React.ReactNode;
}

function RequireAuth({ children }: IProps) {
  const [loading, setLoading] = useState(true);
  const { authed, loginUserIn } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const timer = setTimeout(() => setLoading(false), 800);

    if (token) {
      loginUserIn();
    }

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (authed && !loading) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace state={{ path: pathname }} />;
}

export default RequireAuth;

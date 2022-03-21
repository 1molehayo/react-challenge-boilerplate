import React, { useReducer } from 'react';
import axios from 'services/axios';

interface IAuthProps {
  authed: boolean;
  fetchUser: any;
  loading: boolean;
  login: any;
  logout: any;
  loginUserIn: any;
  user: any;
}

const ContextDefaultValues: IAuthProps = {
  authed: false,
  fetchUser: () => null,
  loading: true,
  login: () => null,
  logout: () => null,
  loginUserIn: () => null,
  user: null
};

const authContext = React.createContext<IAuthProps>(ContextDefaultValues);

const reducer = (state: any, action: { type: any; user?: any }) => {
  switch (action.type) {
    case 'LOGIN_COMPLETED':
      return {
        ...state,
        authed: true
      };
    case 'FETCH_USER_START':
      return { ...state, loading: true };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.user
      };
    case 'LOGOUT_COMPLETED':
      return { ...state, authed: false, loading: false };
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

function useAuth() {
  const [state, dispatch] = useReducer(reducer, ContextDefaultValues);

  const fetchUser = () => {
    return new Promise<void>((resolve, reject) => {
      dispatch({ type: 'FETCH_USER_START' });

      axios
        .get('/users/me')
        .then((response) => {
          dispatch({
            type: 'FETCH_USER_COMPLETED',
            user: response.data
          });
          resolve();
        })
        .catch((error) => {
          reject(error);
          dispatch({ type: 'LOGOUT_COMPLETED' });
        });
    });
  };

  const loginUserIn = () => {
    dispatch({ type: 'LOGIN_COMPLETED' });
  };

  const login = (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      const loginFormData = new FormData();
      loginFormData.append('username', email);
      loginFormData.append('password', password);
      loginFormData.append('grant_type', 'password');

      axios
        .post('/auth/login', loginFormData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => {
          localStorage.setItem('token', response.data.accessToken);
          dispatch({ type: 'LOGIN_COMPLETED' });
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const logout = () => {
    return new Promise<void>((resolve) => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT_COMPLETED' });
      resolve();
    });
  };

  return {
    ...state,
    fetchUser,
    login,
    logout,
    loginUserIn
  };
}

interface IAuthProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}

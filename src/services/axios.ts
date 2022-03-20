import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'https://dashboard.api.staging.core.primer.io',
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config && config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  }
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.data &&
      error.response.data.error &&
      error.response.data.error.errorId === 'InvalidAuthCredentials'
    ) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      return Promise.reject(error.response.data.error.description);
    }
  }
);

export default axios;

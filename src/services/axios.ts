import _axios from 'axios';
import ErrorModel from 'models/error';
import { notify } from 'utility/toaster';

export const handleError = (error: any) => {
  let errorMessage = 'Something went wrong';

  if (error.response && error.response.data && error.response.data.error) {
    const errorResponse = new ErrorModel(error.response.data.error);
    const { description } = errorResponse.error;

    errorMessage = description || 'Something went wrong';
  }

  return errorMessage;
};

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
    const errorMessage = handleError(error);

    if (errorMessage.includes('Invalid authentication credentials')) {
      localStorage.removeItem('token');
      window.location.href = '/login';

      // notify via toastify
      notify({
        type: 'error',
        message: errorMessage
      });
    }

    return Promise.reject(error);
  }
);

export default axios;

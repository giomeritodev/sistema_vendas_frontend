import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const UseRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);

    const returnData = await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        alert('Fez login');
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });

    setLoading(false);
    return returnData;
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Fez login', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};

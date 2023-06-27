import axios from 'axios';
import { useState } from 'react';

export const UseRequests = () => {
  const [loading, setLoading] = useState(false);

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

  const postRequest = async (url: string, body: any) => {
    setLoading(true);

    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
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

  return {
    loading,
    getRequest,
    postRequest,
  };
};

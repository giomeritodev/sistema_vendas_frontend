import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../module/login/types/AuthType';
import { ProductRouterEnum } from '../../module/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const UseRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        navigate(ProductRouterEnum.PRODUCT);
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);
        navigate(ProductRouterEnum.PRODUCT);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
        return undefined;
      });

    setLoading(false);
  };

  return {
    loading,
    getRequest,
    postRequest,
    authRequest,
  };
};

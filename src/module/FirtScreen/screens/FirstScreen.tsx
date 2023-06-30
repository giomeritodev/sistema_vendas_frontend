import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_URSER } from '../../../shared/constants/urls';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connection/auth';
import { connectionAPIGet } from '../../../shared/functions/connection/connectionAPI';
import { LoginRouterEnum } from '../../login/routes';
import { ProductRouterEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await connectionAPIGet(URL_URSER)
          .then(() => {
            navigate(ProductRouterEnum.PRODUCT);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(LoginRouterEnum.LOGIN);
          });
      } else {
        navigate(LoginRouterEnum.LOGIN);
      }
    };

    verifyToken();
  }, []);

  return <Spin />;
};

export default FirstScreen;

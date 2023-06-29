import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { LoginRouterEnum } from '../../login/routes';
import { ProductRouterEnum } from '../../product/routes';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate(ProductRouterEnum.PRODUCT);
    } else {
      navigate(LoginRouterEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export default FirstScreen;

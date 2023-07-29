import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../../../shared/components/loading/Loading';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRouterEnum } from '../../product/routes';

const FirstScreen = () => {
  const { user } = useGlobalReducer();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(ProductRouterEnum.PRODUCT);
    }
  }, [user]);

  return <Loading />;
};

export default FirstScreen;

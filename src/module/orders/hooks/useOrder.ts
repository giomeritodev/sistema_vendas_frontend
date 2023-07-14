import { useEffect } from 'react';

import { URL_ORDER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { UseRequests } from '../../../shared/hooks/useRequests';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrder = () => {
  const { request } = UseRequests();
  const { orders, setOrders } = useOrderReducer();

  useEffect(() => {
    if (!orders || orders.length === 0) {
      request(URL_ORDER_ALL, MethodsEnum.GET, setOrders);
    }
  }, []);

  return {
    orders,
  };
};

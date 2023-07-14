import { useDispatch } from 'react-redux';

import { OrderType } from '../../../shared/types/OrderType';
import { useAppSelector } from '../../hooks';
import { setOrdersAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders } = useAppSelector((store) => store.orderReducer);

  const setOrders = (currentOrders: OrderType[]) => {
    dispatch(setOrdersAction(currentOrders));
  };

  return {
    orders,
    setOrders,
  };
};

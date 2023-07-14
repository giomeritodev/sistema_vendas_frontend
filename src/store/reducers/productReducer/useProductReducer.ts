import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const { products } = useAppSelector((store) => store.productReducer);
  const dispatch = useDispatch();
  const setProducts = (products: ProductType[]) => {
    dispatch(setProductsAction(products));
  };

  return {
    products,
    setProducts,
  };
};

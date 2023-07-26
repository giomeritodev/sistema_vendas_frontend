import { useDispatch } from 'react-redux';

import { ProductType } from '../../../shared/types/ProductType';
import { useAppSelector } from '../../hooks';
import { setProductAction, setProductsAction } from '.';

export const useProductReducer = () => {
  const { products, product } = useAppSelector((store) => store.productReducer);
  const dispatch = useDispatch();
  const setProducts = (currentProducts: ProductType[]) => {
    dispatch(setProductsAction(currentProducts));
  };

  const setProduct = (currentProduct?: ProductType) => {
    dispatch(setProductAction(currentProduct));
  };

  return {
    product,
    products,
    setProducts,
    setProduct,
  };
};

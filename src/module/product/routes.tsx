import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';
import ProductInsert from './screens/ProductInsert';

export enum ProductRouterEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
  PRODUCT_EDIT = '/product/:productId',
}

export const productScreenRoutes: RouteObject[] = [
  {
    path: ProductRouterEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: ProductRouterEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  },
  {
    path: ProductRouterEnum.PRODUCT_EDIT,
    element: <ProductInsert />,
  },
];

import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';

export enum ProductRouterEnum {
  PRODUCT = '/product',
}

export const productScreenRoutes: RouteObject[] = [
  {
    path: ProductRouterEnum.PRODUCT,
    element: <Product />,
  },
];

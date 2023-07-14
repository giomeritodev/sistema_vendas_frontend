import { RouteObject } from 'react-router-dom';

import Order from '.';

export enum OrderRoutesEnum {
  ORDER = '/order',
}

export const orderScreensRouters: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <Order />,
  },
];

import { RouteObject } from 'react-router-dom';

import User from '.';

export enum UserRouterEnum {
  USER_ALL = '/user/all',
}

export const userScreenRoutes: RouteObject[] = [
  {
    path: UserRouterEnum.USER_ALL,
    element: <User />,
  },
];

import { RouteObject } from 'react-router-dom';

import User from '.';
import UserInsert from './screens/UserInsert';

export enum UserRouterEnum {
  USER_ALL = '/user/all',
  USER_INSERT = '/user/insert',
}

export const userScreenRoutes: RouteObject[] = [
  {
    path: UserRouterEnum.USER_ALL,
    element: <User />,
  },
  {
    path: UserRouterEnum.USER_INSERT,
    element: <UserInsert />,
  },
];

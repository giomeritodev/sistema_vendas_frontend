import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';

export enum LoginRouterEnum {
  LOGIN = '/login',
}

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRouterEnum.LOGIN,
    element: <LoginScreen />,
  },
];

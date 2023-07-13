import { RouteObject } from 'react-router-dom';

import Category from './';

export enum CategoryRouterEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
}

export const categoryScreenRoutes: RouteObject[] = [
  {
    path: CategoryRouterEnum.CATEGORY,
    element: <Category />,
  },
];

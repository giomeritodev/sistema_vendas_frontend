import { RouteObject } from 'react-router-dom';

import Category from './';
import CategoryInsert from './screens/CategoryInsert';

export enum CategoryRouterEnum {
  CATEGORY = '/category',
  CATEGORY_INSERT = '/category/insert',
  CATEGORY_EDIT = '/category/:categoryId',
}

export const categoryScreenRoutes: RouteObject[] = [
  {
    path: CategoryRouterEnum.CATEGORY,
    element: <Category />,
  },
  {
    path: CategoryRouterEnum.CATEGORY_INSERT,
    element: <CategoryInsert />,
  },
  {
    path: CategoryRouterEnum.CATEGORY_EDIT,
    element: <CategoryInsert />,
  },
];

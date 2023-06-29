import { RouteObject } from 'react-router-dom';

import FirstScreen from './screens/FirstScreen';

export const firtsScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <div>Página não encontrada</div>,
  },
];

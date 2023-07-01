import './index.css';

import { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firtsScreenRoutes } from './module/firtScreen/routes';
import { loginRoutes } from './module/login/routes';
import { productScreenRoutes } from './module/product/routes';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();
  const routes: RouteObject[] = [...loginRoutes];
  const routesLoggerIn: RouteObject[] = [...firtsScreenRoutes, ...productScreenRoutes].map(
    (route) => ({
      ...route,
      loader: () => verifyLoggedIn(setUser, user),
    }),
  );

  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggerIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

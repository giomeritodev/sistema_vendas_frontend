import './index.css';

import { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { firtsScreenRoutes } from './module/firtScreen/routes';
import { loginRoutes } from './module/login/routes';
import { productScreenRoutes } from './module/product/routes';
import { URL_URSER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { UseRequests } from './shared/hooks/useRequests';

const routes: RouteObject[] = [...loginRoutes];
const routesLoggerIn: RouteObject[] = [...firtsScreenRoutes, ...productScreenRoutes].map(
  (route) => ({
    ...route,
    loader: verifyLoggedIn,
  }),
);

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggerIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = UseRequests();

  useEffect(() => {
    request(URL_URSER, MethodsEnum.GET, setUser);
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

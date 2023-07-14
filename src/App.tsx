import './index.css';

import { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { categoryScreenRoutes } from './module/category/routes';
import { firtsScreenRoutes } from './module/firtScreen/routes';
import { loginRoutes } from './module/login/routes';
import { orderScreensRouters } from './module/orders/router';
import { productScreenRoutes } from './module/product/routes';
import { URL_URSER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { getAuthorizationToken, verifyLoggedIn } from './shared/functions/connection/auth';
import { useNotification } from './shared/hooks/useNotification';
import { UseRequests } from './shared/hooks/useRequests';
import { useGlobalReducer } from './store/reducers/globalReducer/useGlobalReducer';

const routes: RouteObject[] = [...loginRoutes];
const routesLoggerIn: RouteObject[] = [
  ...firtsScreenRoutes,
  ...categoryScreenRoutes,
  ...productScreenRoutes,
  ...orderScreensRouters,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggerIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalReducer();
  const { request } = UseRequests();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      request(URL_URSER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

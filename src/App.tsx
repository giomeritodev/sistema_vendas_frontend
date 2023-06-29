import './index.css';

import { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { firtsScreenRoutes } from './module/FirtScreen/routes';
import { loginRoutes } from './module/login/routes';
import { productScreenRoutes } from './module/product/routes';
import { useNotification } from './shared/hooks/useNotification';

const router: RemixRouter = createBrowserRouter([
  ...firtsScreenRoutes,
  ...loginRoutes,
  ...productScreenRoutes,
]);

function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

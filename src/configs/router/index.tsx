import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/shared/layouts/auth-layout';
import React from 'react';
const LoginPage = React.lazy(() => import('@features/auth/pages/login-page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    ErrorBoundary: () => <>Error</>,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;

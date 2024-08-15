import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/shared/layouts/auth-layout';
import React from 'react';
// import Home from '@/features/Home/pages/home';
// import EpisodesPage from '@/features/Episode/pages/episodes';

const Home = React.lazy(() => import('@/features/Home/pages/home'));
const EpisodesPage = React.lazy(() => import('@/features/Episode/pages/episodes'));

const router = createBrowserRouter([
  {
    path: '/',
    // element: <AuthLayout />,
    ErrorBoundary: () => <>Error</>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/episode/:episode',
    // element: <AuthLayout />,
    ErrorBoundary: () => <>Error</>,
    children: [
      {
        index: true,
        element: <EpisodesPage />,
      },
    ],
  },
]);

export default router;

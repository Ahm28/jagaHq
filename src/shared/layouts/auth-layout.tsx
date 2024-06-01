import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;

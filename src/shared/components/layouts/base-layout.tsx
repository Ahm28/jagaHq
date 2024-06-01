import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Outlet />
    </Suspense>
  );
};

export default BaseLayout;

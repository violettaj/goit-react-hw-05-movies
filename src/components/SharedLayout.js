import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

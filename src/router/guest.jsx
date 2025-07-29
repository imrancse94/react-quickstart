import { lazy } from 'react';

const GuestLayout = lazy(() => import('@/components/admin/Layout'));

const guest = {
    path:'/login',
    element:<h1>Login page</h1>
}

export default guest
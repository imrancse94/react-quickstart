import { lazy } from 'react';

const AuthtLayout = lazy(() => import('@/components/admin/Layout'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

const auth = {
    path:'/admin',
    element: <AuthtLayout/>,
    children:[
        {
            index: true,
            title: 'Dashboard',
            permissionKey: 'dashboard.index',
            path:'dashboard',
            element: <Dashboard/>,
        },
        {
            path: 'users',
            title: 'Users',
            permissionKey: 'users.index',
            children: [
                {
                    index: true,
                    title: 'User List',
                    path: 'list',
                    permissionKey: 'users.index',   
                    element: <h1>Users Page</h1>
                }
            ]
        }
    ],
    
}

export default auth
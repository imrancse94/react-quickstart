import { Navigate, Outlet, useNavigate,useLocation,matchRoutes } from 'react-router-dom';
import React, { useState, Suspense, lazy } from 'react';


import AdminLayoutProvider from '@/contexts/AdminLayoutProvider';
import useCurrentRoute from '@/hooks/use-current-route';


const Loader = lazy(() => import('@/components/admin/Loader'))
const Navbar = lazy(() => import('@/components/admin/Navbar'))
const Footer = lazy(() => import('@/components/admin/Footer'))
const Sidebar = lazy(() => import('@/components/admin/Sidebar'))
const PageHeader = lazy(() => import('@/components/admin/PageHeader'))

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const {title,permissionKey,isIndex} = useCurrentRoute();
    console.log('Layout component rendered',title,permissionKey,isIndex);
    return (
        <AdminLayoutProvider>
            <div className="flex h-screen bg-gray-200">
                {/* Mobile sidebar backdrop */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                <Sidebar sidebarOpen={sidebarOpen} />

                <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar setSidebarOpen={setSidebarOpen} />
                    <Suspense fallback={<Loader />}>
                        <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
                            <section className="max-w-7xl py-4 px-5">
                                <PageHeader title={title} />
                                {/* Render the nested routes */}
                                <Outlet />
                            </section>
                        </main>
                    </Suspense>
                    <Footer />
                </div>
            </div>
        </AdminLayoutProvider>
    );
}

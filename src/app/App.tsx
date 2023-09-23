import { Outlet, useRoutes } from 'react-router-dom'
import { AdminNavbar } from '../widgets/AdminNavbar'
import { ViewPage } from '@/pages/ViewPage'

export const App = () => {
    const element = useRoutes([
        {
            path: '/',
            element: (
                <>
                    <AdminNavbar />
                    <Outlet />
                </>
            ),
            children: [
                {
                    path: 'view',
                    element: <ViewPage />
                },
                {
                    path: 'management',
                    element: <div>Management</div>
                }
            ]
        }
    ])

    return element
}

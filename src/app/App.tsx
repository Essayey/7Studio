import { Outlet, useRoutes } from "react-router-dom";
import { AdminNavbar } from "../widgets/AdminNavbar";
import { Box } from "@chakra-ui/react";
import { ViewSidebar } from "@/widgets/ViewSidebar";
import { ViewPanel } from "@/widgets/ViewPanel";

export const App = () => {
    const element = useRoutes([
        {
            path: "/",
            element: (
                <>
                    <AdminNavbar />
                    <Outlet />
                </>
            ),
            children: [
                {
                    path: "view",
                    element: (
                        <Box
                            height={'calc(100vh - 44px)'}
                            display={'flex'}
                        >
                            <ViewSidebar />
                            <ViewPanel />
                        </Box>
                    )
                },
                {
                    path: "management",
                    element: <div>Management</div>
                },
            ],
        },
    ]);


    return element
}
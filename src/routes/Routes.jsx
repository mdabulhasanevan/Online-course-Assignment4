import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import PrivatePage from "../pages/PrivatePage";
import Login from "../pages/Login";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/public",
                element: <PublicPage />,
            },
            {
                path: "/products",
                element: (
                    <PrivateRoute>
                        <PrivatePage />
                    </PrivateRoute>
                ),
            },

        ],
    },
    {
        path: "/login",
        element: <LoginLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            }
        ]
    },
]);

export default router;
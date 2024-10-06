import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import PrivatePage from "../pages/PrivatePage";
import Login from "../pages/Login";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import SingUp from "../pages/SignUp";
import ProductDetailPage from "../pages/ProductDetailPage";

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
            {
                path: "/productDetails/:id",
                element: (
                    <PrivateRoute>
                        <ProductDetailPage></ProductDetailPage>
                    </PrivateRoute>

                ),
                loader: ({ params }) => fetch(`https://server4-mdabulhasanevan-mdabulhasanevans-projects.vercel.app/course/${params.id}`),

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
    {
        path: "/singup",
        element: <LoginLayout />,
        children: [
            {
                path: "/singup",
                element: <SingUp />,
            }
        ]
    },
]);

export default router;
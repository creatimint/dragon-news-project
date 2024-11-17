import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />
    },
    {
        path: "/news",
        element: <h3>news component</h3>
    },
    {
        path: "auth",
        element: "this is auth"
    },
    {
        path: '*',
        element: "Error"
    }
])

export default router;
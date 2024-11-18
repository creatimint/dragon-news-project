import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import News from "../Components/MainSection/News";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children:[
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: '/category/:id',
                element: <News></News>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
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
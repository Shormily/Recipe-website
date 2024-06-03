import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../Layout/MainLayout";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../../../Layout/DashboardLayout";
import Dashboardhome from "../../../Dashboard/Dashboardhome";
import ManageAllRecipe from "../../../Dashboard/ManageAllRecipe";
import AddRecipe from "../../../Dashboard/AddRecipe";
import EditRecipe from "../../../Dashboard/EditRecipe";
import Products from "../Pages/Product/Products";
import Banner from "../Pages/Banner/Banner";
import Register from "../Sign/Register";
import Login from "../Sign/Login";
import PrivateRoute from "./PrivateRoute.jsx";
import ProductDetails from "../Pages/Product/ProductDetails.jsx";
import Update from "../../../Dashboard/Update.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element:<Banner/>,
            },
            {
                path: "about",
                element:<About/>
            },
            {
                path: "product",
                element:<Products/>
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader:({params}) =>fetch(`http://localhost:5000/recipes/${params.id}`),
            },
            {
                path: "contact",
                element:<Contact/>
            },
            {
                path: "register",
                element:<Register/>
            },
            {
                path: "login",
                element:<Login/>
            },
            {
                path: "/dashboard",
                element: (
                   <PrivateRoute>
                         <DashboardLayout />
                   </PrivateRoute>
                ),
                children: [
                  {
                    index: true,
                    element: <Dashboardhome />,
                    },
                    {
                        path: "manage-recipes",
                        element: <ManageAllRecipe />
                      
                    },
                    {
                        path: "add-recipes",
                        element:<AddRecipe/>
                    },
                    {
                        path: "edit-recipe/:id",
                        element: <EditRecipe />,
                        loader:({params}) =>fetch(`http://localhost:5000/recipes/${params.id}`),
                    },
                    {
                        path: "update/:id",
                        element: <Update />,
                        loader:({params}) =>fetch(`http://localhost:5000/recipes/${params.id}`),
                    },
                
                ],
              },
       ]
    }
])

export default router;
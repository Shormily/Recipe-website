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
import Comming from "../Comming/Comming.jsx";
import Reservation from "../Comming/Reservation.jsx";
import Gallery from "../Comming/Gallery.jsx";
import Blog from "../Comming/Blog.jsx";
import Articles from "../Comming/Articles.jsx";
import LoadingSpinner from "../../../Layout/LoadingSpinner.jsx";
import Rerom from "../Sign/Rerom.jsx";
import Profile from "../../../Dashboard/Profile.jsx";
import EditProfile from "../../../Dashboard/EditProfile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Banner />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "coming",
                element: <Comming />
            },
            {
                path: "reservation",
                element: <Reservation />
            },
            {
                path: "article",
                element: <Articles />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "product",
                element: <Products />
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://server-0bf5.onrender.com/recipes/${params.id}`),
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "rerom",
                element: <Rerom />
            },
            {
                path: "login",
                element: <Login />
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
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "manage-recipes",
                        element: <ManageAllRecipe />

                    },
                    {
                        path: "profile-edit/:id",
                        element: <EditProfile />,
                        loader: ({ params }) => fetch(`https://server-0bf5.onrender.com/users/get/${params.id}`),


                    },
                    {
                        path: "add-recipes",
                        element: <AddRecipe />
                    },
                    {
                        path: "edit-recipe/:id",
                        element: <EditRecipe />,
                        loader: ({ params }) => fetch(`https://server-0bf5.onrender.com/recipes/${params.id}`),
                    },
                    {
                        path: "update/:id",
                        element: <Update />,
                        loader: ({ params }) => fetch(`https://server-0bf5.onrender.com/recipes/${params.id}`),
                    },

                ],
            },
        ]
    }
])

export default router;
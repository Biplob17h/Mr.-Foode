import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Settings from "../Layout/Settings";
import AboutUs from "../Pages/AbuotUs/AboutUs";
import Login from "../Pages/Authentication/Login/Login";
import Location from "../Pages/Authentication/Register/Location";
import Register from "../Pages/Authentication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Cart from "../Pages/Cart/Cart";
import Chef from "../Pages/Chef/Chef";
import Home from "../Pages/Home/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Profile from "../Pages/Profile/Profile";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Confirm from "../Pages/Confirm/Confirm";
import Repot from "../Components/Repot";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/order',
                element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/notfound',
                element: <NotFound></NotFound>
            },
            {
                path: '/chef',
                element: <Chef></Chef>
            },
            {
                path: '/location',
                element: <Location></Location>
            }
        ]
    },
    {
        path: '/settings',
        element: <Settings></Settings>,
        children: [
            {
                path: '/settings/profile',
                element: <Profile></Profile>
            },
            {
                path: '/settings/cart',
                element: <Cart></Cart>
            },
            {
                path: '/settings/confirm',
                element: <Confirm></Confirm>
            },
            {
                path: '/settings/repot',
                element: <Repot></Repot>
            }

        ]
    }
])

export default Routes;
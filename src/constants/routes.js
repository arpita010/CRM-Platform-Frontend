import DashboardPage from "../components/dashboard/DashboardPage";
import Home from "../components/home/Home";
import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";
import UserProfile from "../components/userProfile/UserProfile";

const RoutesMap = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/signup',
        component: <Signup />
    },
    {
        path: '/signin',
        component: <Signin />
    },
    {
        path: '/dashboard',
        component: <DashboardPage />
    },
    {
        path: '/user/profile',
        component: <UserProfile />
    },
];

export default RoutesMap;
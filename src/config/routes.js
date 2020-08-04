// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";

// Admin Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminHoliday from "../pages/Admin/Holiday";

// Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/",
        component: AdminHome,
        exact: true
      },
      {
        path: "/login",
        component: AdminSingIn,
        exact: true
      },
      {
        path: "/users",
        component: AdminUsers,
        exact: true
      },
      {
        path: "/holidays",
        component: AdminHoliday,
        exact: true
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;

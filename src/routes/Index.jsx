import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";
import AccountLinks from "../pages/AccountLinks/AccountLinks";
import Login from "../pages/authentication/Login";
import NumberVerify from "../pages/authentication/NumberVerify";
import Dashboard from "../pages/Dashboard/Dashboard";
import AuthProtected from "./AuthProtected";
import PaymentOverview from "../pages/PaymentOverview/PaymentOverview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: (
      <AuthProtected>
        <Layout />
      </AuthProtected>
    ),
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      { path: "/dashboard", element: <Dashboard /> },
      {
        path: "/account-links",
        element: <AccountLinks />,
      },
      {
        path: "/payment-overview",
        element: <PaymentOverview />,
      },
      {
        path: "*",
        element: (
          <h1
            style={{
              height: `calc(100vh - 64px)`,
            }}
            className={`flex justify-center items-center`}
          >
            Please type a valid url!
          </h1>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/number-verify",
    element: <NumberVerify />,
  },
]);

export default router;

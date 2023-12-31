import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout";
import AccountLinks from "../pages/AccountLinks/AccountLinks";
import Login from "../pages/authentication/Login";
import NumberVerify from "../pages/authentication/NumberVerify";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import FAQ from "../pages/GetHelps/FAQ/FAQ";
import TackFollow from "../pages/GetHelps/TicketFollow/TackFollow";
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import SettingOverview from "../pages/Settings/SettingOverview";
import Settings from "../pages/Settings/Settings";
import AuthProtected from "./AuthProtected";

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
        path: "/payment-details",
        element: <PaymentDetails />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
      {
        path: "/get-help/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/get-help/frequently-asked-questions",
        element: <FAQ />,
      },
      {
        path: "/get-help/ticket-foll",
        element: <TackFollow />,
      },
      {
        path: "/setting-overview",
        element: <SettingOverview />,
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

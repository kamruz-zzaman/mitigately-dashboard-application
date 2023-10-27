/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  // const { userProfile, loading } = useProfile();
  const { loading } = useProfile();

  const state = JSON.parse(sessionStorage.getItem("authUser"));

  const { user, accessToken } = state || {};

  if (loading) {
    return;
  }
  return !user && !accessToken && !loading ? (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  ) : (
    children
  );
};

export default AuthProtected;

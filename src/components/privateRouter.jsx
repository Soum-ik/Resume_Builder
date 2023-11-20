import { useAuth } from "../auth/authSetUp";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRouter() {
  const { user } = useAuth();
//   console.log(currentUser);

  return user ? <Outlet /> : <Navigate to="/logInPage" />;
}
import { useAuth } from "../auth/authSetUp";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRouter() {
  const { user } = useAuth();
  console.log(user);

  return !user ? <Outlet /> : <Navigate to="/" />;
}
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../negocio/context/AuthContext";
import { Loading } from "./Loading"

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loading/>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

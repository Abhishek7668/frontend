import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading)
        return <h1 className="text-center mt-20">Loading...</h1>;

    if (!user)
        return <Navigate to="/" replace />;

    return children;

}
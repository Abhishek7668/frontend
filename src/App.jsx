import { Routes, Route } from "react-router-dom";

import login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Tickets from "./pages/Tickets";
import Analytics from "./pages/Analytics";
import Knowledge from "./pages/Knowledge";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/chat"
                element={
                    <ProtectedRoute>
                        <Chat />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/tickets"
                element={
                    <ProtectedRoute>
                        <Tickets />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/analytics"
                element={
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/knowledge"
                element={
                    <ProtectedRoute>
                        <Knowledge />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFound />} />

        </Routes>

    );

}

export default App;
import { NavLink } from "react-router-dom";
import { LayoutDashboard, MessageSquare, BarChart3, Ticket, Database, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const menu = [
        {
            name: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            path: "/dashboard",
        },
        {
            name: "AI Chat",
            icon: <MessageSquare size={20} />,
            path: "/chat",
        },
        {
            name: "Analytics",
            icon: <BarChart3 size={20} />,
            path: "/analytics",
        },
        {
            name: "Tickets",
            icon: <Ticket size={20} />,
            path: "/tickets",
        },
        {
            name: "Knowledge",
            icon: <Database size={20} />,
            path: "/knowledge",
        },
    ];

    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">

            <div className="p-6">

                <h1 className="text-2xl font-bold text-blue-500">
                    AI Support
                </h1>

            </div>

            <nav className="flex-1">

                {menu.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-6 py-4 transition ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800"
                            }`
                        }
                    >
                        {item.icon}
                        {item.name}
                    </NavLink>

                ))}

            </nav>

            <button
                onClick={handleLogout}
                className="m-4 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
            >
                <LogOut size={18} />
                Logout
            </button>

        </aside>
    );
}
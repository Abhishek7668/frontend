import { Menu } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onMenuClick = () => {} }) {

    const { user } = useAuth();

    return (

        <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-4 md:px-8 gap-3">

            <div className="flex items-center gap-3 min-w-0">

                <button
                    onClick={onMenuClick}
                    className="text-slate-300 hover:text-white md:hidden shrink-0"
                >
                    <Menu size={24} />
                </button>

                <h2 className="text-base md:text-xl font-semibold text-white truncate">
                    AI Customer Support Dashboard
                </h2>

            </div>

            <div className="text-right shrink-0">

                <p className="text-white font-medium text-sm md:text-base truncate max-w-[140px] md:max-w-none">
                    {user?.email}
                </p>

                <p className="text-xs md:text-sm text-slate-400 capitalize">
                    {user?.role}
                </p>

            </div>

        </header>

    );

}
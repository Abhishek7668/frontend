import { useAuth } from "../context/AuthContext";

export default function Navbar() {

    const { user } = useAuth();

    return (

        <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

            <div>

                <h2 className="text-xl font-semibold text-white">
                    AI Customer Support Dashboard
                </h2>

            </div>

            <div className="text-right">

                <p className="text-white font-medium">
                    {user?.email}
                </p>

                <p className="text-sm text-slate-400 capitalize">
                    {user?.role}
                </p>

            </div>

        </header>

    );

}
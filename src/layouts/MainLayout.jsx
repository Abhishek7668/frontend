import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="flex h-screen bg-slate-950">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-1 flex-col min-h-0">

                {/* Top Navbar */}
                <Navbar />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto bg-slate-950">

                    {children}

                </main>

            </div>

        </div>
    );
}
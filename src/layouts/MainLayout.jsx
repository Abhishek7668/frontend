import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-slate-950">

            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main Content */}
            <div className="flex flex-1 flex-col min-h-0 min-w-0">

                {/* Top Navbar */}
                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950">

                    {children}

                </main>

            </div>

        </div>
    );
}
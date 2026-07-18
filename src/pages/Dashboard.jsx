import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import {
    MessageSquare,
    AlertTriangle,
    CheckCircle,
    Ticket,
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {

    const {

        loading,
        error,
        stats,
        recentTickets

    } = useDashboard();

    const cards = [

        {
            title: "Total Tickets",
            value: stats.total,
            icon: Ticket,
            color: "text-cyan-400"
        },

        {
            title: "Open Tickets",
            value: stats.open,
            icon: MessageSquare,
            color: "text-yellow-400"
        },

        {
            title: "Resolved",
            value: stats.resolved,
            icon: CheckCircle,
            color: "text-emerald-400"
        },

        {
            title: "High Priority",
            value: stats.high,
            icon: AlertTriangle,
            color: "text-red-400"
        }

    ];

    return (

        <MainLayout>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8">

                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-white">

                        AI Customer Support Dashboard

                    </h1>

                    <p className="mt-2 text-slate-400">

                        Monitor AI conversations, tickets and support activities.

                    </p>

                </div>

                {/* Error */}

                {error && (

                    <div className="mb-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-400">

                        {error}

                    </div>

                )}

                {/* Cards */}

                {

                    loading

                        ?

                        (

                            <Loader text="Loading Dashboard..." />

                        )

                        :

                        (

                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                                {

                                    cards.map((card) => {

                                        const Icon = card.icon;

                                        return (

                                            <div
                                                key={card.title}
                                                className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl transition hover:scale-105"
                                            >

                                                <div className="flex items-center justify-between">

                                                    <div>

                                                        <p className="text-slate-400">

                                                            {card.title}

                                                        </p>

                                                        <h2 className="mt-4 text-4xl font-bold text-white">

                                                            {card.value}

                                                        </h2>

                                                    </div>

                                                    <Icon
                                                        size={42}
                                                        className={card.color}
                                                    />

                                                </div>

                                            </div>

                                        );

                                    })

                                }

                            </div>

                        )

                }

                {/* Quick Actions */}

                <div className="mt-8 grid gap-6 md:grid-cols-3">

                    <Link
                        to="/chat"
                        className="rounded-3xl border border-cyan-500 bg-cyan-500/10 p-6 transition hover:bg-cyan-500/20"
                    >

                        <h3 className="text-xl font-bold text-white">

                            AI Chat

                        </h3>

                        <p className="mt-2 text-slate-400">

                            Talk with AI Customer Support.

                        </p>

                    </Link>

                    <Link
                        to="/tickets"
                        className="rounded-3xl border border-amber-500 bg-amber-500/10 p-6 transition hover:bg-amber-500/20"
                    >

                        <h3 className="text-xl font-bold text-white">

                            Ticket Management

                        </h3>

                        <p className="mt-2 text-slate-400">

                            View and manage AI generated tickets.

                        </p>

                    </Link>

                    <Link
                        to="/knowledge"
                        className="rounded-3xl border border-emerald-500 bg-emerald-500/10 p-6 transition hover:bg-emerald-500/20"
                    >

                        <h3 className="text-xl font-bold text-white">

                            Knowledge Base

                        </h3>

                        <p className="mt-2 text-slate-400">

                            Upload company documents.

                        </p>

                    </Link>

                </div>

                {/* Recent Tickets */}

                <div className="mt-10 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-xl">

                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-2xl font-bold text-white">

                            Recent Tickets

                        </h2>

                        <Link
                            to="/tickets"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                        >

                            View All

                            <ArrowRight size={18} />

                        </Link>

                    </div>

                    {

                        recentTickets.length === 0

                            ?

                            (

                                <div className="py-10 text-center text-slate-400">

                                    No Tickets Available

                                </div>

                            )

                            :

                            (

                                <div className="space-y-4">

                                    {

                                        recentTickets.map((ticket) => (

                                            <div
                                                key={ticket.ticket_number}
                                                className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/40 p-5"
                                            >

                                                <div>

                                                    <p className="font-semibold text-cyan-400">

                                                        {ticket.ticket_number}

                                                    </p>

                                                    <p className="mt-1 text-slate-300">

                                                        {ticket.question}

                                                    </p>

                                                </div>

                                                <div className="text-right">

                                                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">

                                                        {ticket.priority}

                                                    </span>

                                                    <p className="mt-2 text-sm text-slate-400">

                                                        {ticket.status}

                                                    </p>

                                                </div>

                                            </div>

                                        ))

                                    }

                                </div>

                            )

                    }

                </div>

            </div>

        </MainLayout>

    );

}
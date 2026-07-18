import {
    Users,
    MessageCircle,
    MessagesSquare,
    AlertTriangle
} from "lucide-react";

import Loader from "../components/Loader";
import StatCard from "../components/analytics/StatCard";
import AgentChart from "../components/analytics/AgentChart";
import IntentChart from "../components/analytics/IntentChart";
import SessionChart from "../components/analytics/SessionChart";
import EscalationChart from "../components/analytics/EscalationChart";
import MainLayout from "../layouts/MainLayout";
import useAnalytics from "../hooks/useAnalytics";

export default function Analytics() {

    const {
        overview,
        agents,
        intents,
        sessions,
        escalations,
        loading
    } = useAnalytics();

    if (loading) {
        return <Loader text="Loading Analytics..." />;
    }

    return (

        <MainLayout>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8">

                {/* Header */}

                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">

                        Analytics Dashboard

                    </h1>

                    <p className="mt-2 text-slate-400 text-lg">

                        Monitor users, conversations, sessions and escalations in real time.

                    </p>

                </div>

                {/* Top Cards */}

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    <StatCard
                        title="Total Users"
                        value={overview?.total_users}
                        icon={<Users size={30} />}
                        color="cyan"
                    />

                    <StatCard
                        title="Total Sessions"
                        value={overview?.total_sessions}
                        icon={<MessageCircle size={30} />}
                        color="emerald"
                    />

                    <StatCard
                        title="Total Conversations"
                        value={overview?.total_conversations}
                        icon={<MessagesSquare size={30} />}
                        color="amber"
                    />

                    <StatCard
                        title="Total Escalations"
                        value={overview?.total_escalations}
                        icon={<AlertTriangle size={30} />}
                        color="rose"
                    />

                </div>

                {/* Charts */}

                <div className="grid gap-7 lg:grid-cols-2 mt-8">

                    <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-7 shadow-xl">

                        <h2 className="text-xl font-semibold text-white mb-5">

                            Agent Usage

                        </h2>

                        <AgentChart data={agents} />

                    </div>

                    <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-7 shadow-xl">

                        <h2 className="text-xl font-semibold text-white mb-5">

                            Intent Distribution

                        </h2>

                        <IntentChart data={intents} />

                    </div>

                    <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-7 shadow-xl">

                        <h2 className="text-xl font-semibold text-white mb-5">

                            Session Activity

                        </h2>

                        <SessionChart data={sessions} />

                    </div>

                    <div className="rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl p-7 shadow-xl">

                        <h2 className="text-xl font-semibold text-white mb-5">

                            Escalation Summary

                        </h2>

                        <EscalationChart data={escalations} />

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}
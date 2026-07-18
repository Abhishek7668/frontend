import {
    X,
    BadgeAlert,
    Calendar,
    Bot
} from "lucide-react";

export default function TicketModal({
    open,
    onClose,
    ticket
}) {

    if (!open || !ticket) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-3xl rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-700 p-6">

                    <div>

                        <h2 className="text-2xl font-bold text-white">
                            Ticket Details
                        </h2>

                        <p className="mt-1 text-cyan-400">
                            {ticket.ticket_number}
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-xl p-2 hover:bg-slate-800"
                    >
                        <X className="text-white" />
                    </button>

                </div>

                {/* Content */}

                <div className="space-y-6 p-6">

                    {/* Question */}

                    <div className="rounded-2xl bg-slate-800/50 p-5">

                        <div className="mb-4 flex items-center gap-2">

                            <Bot className="text-cyan-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Customer Question
                            </h3>

                        </div>

                        <p className="leading-7 text-slate-300">
                            {ticket.question}
                        </p>

                    </div>

                    {/* Ticket Info */}

                    <div className="rounded-2xl bg-slate-800/50 p-5">

                        <div className="mb-4 flex items-center gap-2">

                            <BadgeAlert className="text-amber-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Ticket Information
                            </h3>

                        </div>

                        <div className="grid grid-cols-2 gap-4 text-slate-300">

                            <div>
                                <span className="font-semibold text-white">
                                    Priority:
                                </span>
                                <br />
                                {ticket.priority}
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Status:
                                </span>
                                <br />
                                {ticket.status}
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Assigned Agent:
                                </span>
                                <br />
                                {ticket.assigned_agent}
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Session ID:
                                </span>
                                <br />
                                {ticket.session_id}
                            </div>

                        </div>

                    </div>

                    {/* Timeline */}

                    <div className="rounded-2xl bg-slate-800/50 p-5">

                        <div className="mb-4 flex items-center gap-2">

                            <Calendar className="text-emerald-400" />

                            <h3 className="text-lg font-semibold text-white">
                                Timeline
                            </h3>

                        </div>

                        <div className="space-y-3 text-slate-300">

                            <p>
                                <strong>Created :</strong>{" "}
                                {new Date(ticket.created_at).toLocaleString()}
                            </p>

                            <p>
                                <strong>Updated :</strong>{" "}
                                {new Date(ticket.updated_at).toLocaleString()}
                            </p>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="flex justify-end border-t border-slate-700 p-6">

                    <button
                        onClick={onClose}
                        className="rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600"
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>

    );

}
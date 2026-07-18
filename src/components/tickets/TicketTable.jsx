import {
    Eye,
    Pencil
} from "lucide-react";

const statusClasses = {
    OPEN: "bg-cyan-500/20 text-cyan-400",
    WAIT: "bg-amber-500/20 text-amber-400",
    RESOLVED: "bg-emerald-500/20 text-emerald-400",
    CLOSED: "bg-slate-500/20 text-slate-300"
};

const priorityClasses = {
    HIGH: "bg-red-500/20 text-red-400",
    MEDIUM: "bg-yellow-500/20 text-yellow-400",
    LOW: "bg-green-500/20 text-green-400"
};

export default function TicketTable({
    tickets = [],
    onView,
    onEdit
}) {

    if (!tickets.length) {

        return (

            <div className="py-20 text-center text-slate-400">

                No Tickets Found

            </div>

        );

    }

    return (

        <div className="overflow-x-auto">

            <table className="min-w-full">

                <thead>

                    <tr className="border-b border-slate-700 text-left text-slate-300">

                        <th className="px-5 py-4">Ticket No.</th>
                        <th className="px-5 py-4">Question</th>
                        <th className="px-5 py-4">Priority</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4">Assigned Agent</th>
                        <th className="px-5 py-4">Created At</th>
                        <th className="px-5 py-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {tickets.map((ticket) => (

                        <tr
                            key={ticket.ticket_number}
                            className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                        >

                            <td className="px-5 py-4 font-semibold text-cyan-400">
                                {ticket.ticket_number}
                            </td>

                            <td className="px-5 py-4 text-slate-300 max-w-md">
                                {ticket.question}
                            </td>

                            <td className="px-5 py-4">

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                        priorityClasses[ticket.priority] ??
                                        "bg-slate-700 text-white"
                                    }`}
                                >
                                    {ticket.priority}
                                </span>

                            </td>

                            <td className="px-5 py-4">

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                        statusClasses[ticket.status] ??
                                        "bg-slate-700 text-white"
                                    }`}
                                >
                                    {ticket.status}
                                </span>

                            </td>

                            <td className="px-5 py-4 text-slate-300">
                                {ticket.assigned_agent}
                            </td>

                            <td className="px-5 py-4 text-slate-400">
                                {new Date(ticket.created_at).toLocaleString()}
                            </td>

                            <td className="px-5 py-4">

                                <div className="flex justify-center gap-2">

                                    <button
                                        onClick={() => onView?.(ticket.ticket_number)}
                                        className="rounded-lg p-2 text-cyan-400 hover:bg-cyan-500/20"
                                        title="View Ticket"
                                    >
                                        <Eye size={18} />
                                    </button>

                                    <button
                                        onClick={() => onEdit?.(ticket)}
                                        className="rounded-lg p-2 text-amber-400 hover:bg-amber-500/20"
                                        title="Update Status"
                                    >
                                        <Pencil size={18} />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}
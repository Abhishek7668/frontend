import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STATUS_OPTIONS = [
    "OPEN",
    "WAIT",
    "RESOLVED",
    "CLOSED"
];

export default function UpdateStatusModal({
    open,
    onClose,
    ticket,
    onSave
}) {

    const [status, setStatus] = useState("OPEN");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        if (ticket) {

            setStatus(ticket.status);

        }

    }, [ticket]);

    if (!open || !ticket) return null;

    const handleSubmit = async () => {

        try {

            setLoading(true);

            await onSave(ticket.ticket_number, status);

            onClose();

        } catch (err) {

            console.error(err);

            alert("Unable to update ticket.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-700 p-6">

                    <div>

                        <h2 className="text-2xl font-bold text-white">
                            Update Ticket Status
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

                {/* Body */}

                <div className="space-y-5 p-6">

                    <div>

                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Current Status
                        </label>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                        >

                            {STATUS_OPTIONS.map((item) => (

                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>

                            ))}

                        </select>

                    </div>

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-3 border-t border-slate-700 p-6">

                    <button
                        onClick={onClose}
                        className="rounded-xl border border-slate-600 px-5 py-2 text-white hover:bg-slate-800"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white hover:bg-cyan-600 disabled:opacity-50"
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>

                </div>

            </div>

        </div>

    );

}
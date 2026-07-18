import { useState } from "react";
import { X } from "lucide-react";

export default function CreateTicketModal({
    open,
    onClose,
    onSubmit
}) {

    const [form, setForm] = useState({
        customer: "",
        subject: "",
        description: "",
        priority: "Medium",
        status: "Open",
        agent: "AI Agent"
    });

    if (!open) return null;

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);

        setForm({
            customer: "",
            subject: "",
            description: "",
            priority: "Medium",
            status: "Open",
            agent: "AI Agent"
        });

        onClose();

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

            <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-700 p-6">

                    <h2 className="text-2xl font-bold text-white">
                        Create New Ticket
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 hover:bg-slate-800"
                    >
                        <X className="text-white" />
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 p-6"
                >

                    <input
                        name="customer"
                        placeholder="Customer Name"
                        value={form.customer}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                    />

                    <input
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                    />

                    <textarea
                        rows="5"
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                    />

                    <div className="grid gap-4 md:grid-cols-3">

                        <select
                            name="priority"
                            value={form.priority}
                            onChange={handleChange}
                            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                        >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>

                        <select
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                        >
                            <option>Open</option>
                            <option>Pending</option>
                            <option>Resolved</option>
                        </select>

                        <input
                            name="agent"
                            value={form.agent}
                            onChange={handleChange}
                            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
                        />

                    </div>

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-slate-600 px-5 py-3 text-white"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600"
                        >
                            Create Ticket
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}
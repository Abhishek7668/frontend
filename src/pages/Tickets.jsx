import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import TicketTable from "../components/tickets/TicketTable";
import TicketModal from "../components/tickets/TicketModal";
import useTickets from "../hooks/useTickets";
import { getTicket } from "../api/tickets";
import UpdateStatusModal from "../components/tickets/UpdateStatusModal";
export default function Tickets() {

    const {
        tickets,
        loading,
        error,
        editTicket,
        refresh
    } = useTickets();

    const [selectedTicket, setSelectedTicket] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [statusModalOpen, setStatusModalOpen] = useState(false);

    // ==========================
    // View Ticket Details
    // ==========================
    const handleView = async (ticketNumber) => {

        try {

            const res = await getTicket(ticketNumber);

            setSelectedTicket(res.data.ticket);

            setModalOpen(true);

        } catch (err) {

            console.error(err);

            alert("Unable to load ticket details.");

        }

    };

    // ==========================
    // Update Ticket Status
    // ==========================
    const handleEdit = async (ticket) => {

        const status = prompt(
            "Enter Status (OPEN / WAIT / RESOLVED / CLOSED)",
            ticket.status
        );

        if (!status) return;

        try {

            await editTicket(ticket.ticket_number, status.toUpperCase());

            alert("Ticket updated successfully.");

        } catch (err) {

            console.error(err);

            alert("Unable to update ticket.");

        }

    };

    return (

        <MainLayout>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8">

                {/* Header */}

                <div className="flex items-center justify-between mb-8">

                    <div>

                        <h1 className="text-4xl font-bold text-white">
                            Ticket Management
                        </h1>

                        <p className="mt-2 text-slate-400">
                            AI automatically creates tickets when escalation is detected.
                        </p>

                    </div>

                </div>

                {/* Error */}

                {error && (

                    <div className="mb-5 rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-400">
                        {error}
                    </div>

                )}

                {/* Ticket Table */}

                <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl">

                    {loading ? (

                        <Loader text="Loading Tickets..." />

                    ) : (

                        <TicketTable
                            tickets={tickets}
                            onView={handleView}
                            onEdit={handleEdit}
                        />

                    )}

                </div>

            </div>

            {/* Ticket Details */}

            <TicketModal
                open={modalOpen}
                ticket={selectedTicket}
                onClose={() => setModalOpen(false)}
            />

        </MainLayout>

    );

}
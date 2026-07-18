import { useEffect, useState } from "react";
import {
    getTickets,
    updateTicket
} from "../api/tickets";

export default function useTickets() {

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Search & Filters
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [priorityFilter, setPriorityFilter] = useState("All");

    // ===============================
    // Fetch Tickets
    // ===============================
    const fetchTickets = async () => {

        try {

            setLoading(true);

            const res = await getTickets();

            setTickets(res.data.tickets || []);

            setError(null);

        } catch (err) {

            console.error(err);

            setError("Failed to load tickets.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchTickets();

    }, []);

    // ===============================
    // Update Ticket Status
    // ===============================
    const editTicket = async (ticketNumber, status) => {

        try {

            await updateTicket(ticketNumber, status);

            await fetchTickets();

        } catch (err) {

            console.error(err);

            throw err;

        }

    };

    // ===============================
    // Apply Filters
    // ===============================
    const filteredTickets = tickets.filter((ticket) => {

        const matchesSearch =

            ticket.ticket_number?.toLowerCase().includes(search.toLowerCase()) ||

            ticket.question?.toLowerCase().includes(search.toLowerCase()) ||

            ticket.assigned_agent?.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =

            statusFilter === "All" ||

            ticket.status === statusFilter;

        const matchesPriority =

            priorityFilter === "All" ||

            ticket.priority === priorityFilter;

        return (

            matchesSearch &&
            matchesStatus &&
            matchesPriority

        );

    });

    return {

        tickets: filteredTickets,

        loading,

        error,

        refresh: fetchTickets,

        editTicket,

        search,
        setSearch,

        statusFilter,
        setStatusFilter,

        priorityFilter,
        setPriorityFilter

    };

}
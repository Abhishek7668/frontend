import { useEffect, useState } from "react";
import { getTickets } from "../api/tickets";

export default function useDashboard() {

    const [loading, setLoading] = useState(true);

    const [stats, setStats] = useState({

        total: 0,

        open: 0,

        resolved: 0,

        high: 0

    });

    const [recentTickets, setRecentTickets] = useState([]);

    const [error, setError] = useState("");

    const fetchDashboard = async () => {

        try {

            setLoading(true);

            const res = await getTickets();

            const tickets = res.data.tickets || [];

            setStats({

                total: tickets.length,

                open: tickets.filter(
                    t => t.status === "OPEN"
                ).length,

                resolved: tickets.filter(
                    t => t.status === "RESOLVED"
                ).length,

                high: tickets.filter(
                    t => t.priority === "HIGH"
                ).length

            });

            // Latest 5 Tickets

            const sorted = [...tickets].sort(

                (a, b) =>

                    new Date(b.created_at) -

                    new Date(a.created_at)

            );

            setRecentTickets(

                sorted.slice(0, 5)

            );

            setError("");

        } catch (err) {

            console.error(err);

            setError("Unable to load dashboard.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchDashboard();

    }, []);

    return {

        loading,

        error,

        stats,

        recentTickets,

        refresh: fetchDashboard

    };

}
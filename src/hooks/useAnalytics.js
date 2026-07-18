import { useEffect, useState } from "react";

import {

    getOverview,

    getAgents,

    getIntents,

    getSessions,

    getEscalations

} from "../api/analytics";

import toast from "react-hot-toast";

export default function useAnalytics() {

    const [overview, setOverview] = useState(null);

    const [agents, setAgents] = useState([]);

    const [intents, setIntents] = useState([]);

    const [sessions, setSessions] = useState([]);

    const [escalations, setEscalations] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadAnalytics();

    }, []);

    async function loadAnalytics() {

        try {

            setLoading(true);

            const [

                overviewRes,

                agentRes,

                intentRes,

                sessionRes,

                escalationRes

            ] = await Promise.all([

                getOverview(),

                getAgents(),

                getIntents(),

                getSessions(),

                getEscalations()

            ]);
            console.log("Overview:", overviewRes.data);
            console.log("Agents:", agentRes.data);
            console.log("Intents:", intentRes.data);
            console.log("Sessions:", sessionRes.data);
            console.log("Escalations:", escalationRes.data);

            setOverview(overviewRes.data.data);

            setAgents(agentRes.data.data);

            setIntents(intentRes.data.data);

            setSessions(sessionRes.data.data);

            setEscalations(escalationRes.data.data);

        }

        catch (err) {

            console.error(err);

            toast.error("Unable to load analytics.");

        }

        finally {

            setLoading(false);

        }

    }

    return {

        overview,

        agents,

        intents,

        sessions,

        escalations,

        loading,

        refresh: loadAnalytics

    };

}
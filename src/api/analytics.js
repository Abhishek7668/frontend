import axios from "axios";
import { storage } from "../utils/storage";

const API = import.meta.env.VITE_API_URL;

const authHeader = () => ({
    headers: {
        Authorization: `Bearer ${storage.getToken()}`
    }
});

export const getOverview = () =>
    axios.get(`${API}/analytics/overview`, authHeader());

export const getAgents = () =>
    axios.get(`${API}/analytics/agents`, authHeader());

export const getIntents = () =>
    axios.get(`${API}/analytics/intents`, authHeader());

export const getSessions = () =>
    axios.get(`${API}/analytics/sessions`, authHeader());

export const getEscalations = () =>
    axios.get(`${API}/analytics/escalations`, authHeader());
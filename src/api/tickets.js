import axios from "axios";
import { API_URL } from "../utils/constants";

const API = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// ===============================
// Attach JWT Token
// ===============================
API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

// ===============================
// Ticket APIs
// ===============================

// Get All Tickets
export const getTickets = () =>
    API.get("/tickets");

// Get Ticket By Ticket Number
export const getTicket = (ticketNumber) =>
    API.get(`/tickets/${ticketNumber}`);

// Update Ticket Status
export const updateTicket = (ticketNumber, status) =>
    API.put(`/tickets/${ticketNumber}`, {
        status
    });

export default API;
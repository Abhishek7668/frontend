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
// Knowledge APIs
// ===============================

export const uploadKnowledge = (formData) =>

    API.post("/knowledge/upload", formData, {

        headers: {

            "Content-Type": "multipart/form-data"

        }

    });

export default API;

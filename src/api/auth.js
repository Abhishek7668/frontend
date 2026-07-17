import axios from "axios";
import { API_URL } from "../utils/constants";

const authAPI = axios.create({
    baseURL: API_URL,
});

export const registerUser = (data) => {
    return authAPI.post("/auth/register", data);
};

export const loginUser = (data) => {
    return authAPI.post("/auth/login", data);
};

export const getCurrentUser = (token) => {
    return authAPI.get("/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
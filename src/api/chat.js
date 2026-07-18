import axios from "axios";
import { API_URL } from "../utils/constants";

const chatAPI = axios.create({
    baseURL: API_URL,
});

export const sendMessage = (token, data) => {

    return chatAPI.post(
        "/chat",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

};

export const getHistory = (token, sessionId) => {

    return chatAPI.get(
        `/history/${sessionId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

};
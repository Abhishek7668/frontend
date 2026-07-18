import { useState } from "react";
import { sendMessage } from "../api/chat";
import { storage } from "../utils/storage";
import toast from "react-hot-toast";

export default function useChat() {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSessionId = () => {

        let sessionId = localStorage.getItem("session_id");

        if (!sessionId) {

            sessionId = `session_${Date.now()}`;

            localStorage.setItem("session_id", sessionId);

        }

        return sessionId;

    };

    const askQuestion = async (question) => {

        if (!question?.trim()) return;

        const token = storage.getToken();

        const currentTime = new Date().toISOString();

        // User Message
        setMessages(prev => [

            ...prev,

            {
                id: Date.now(),
                type: "user",
                text: question,
                time: currentTime
            }

        ]);

        setLoading(true);

        try {

            const response = await sendMessage(token, {

                session_id: getSessionId(),

                question

            });

            const ai = response.data;

            // AI Message
            setMessages(prev => [

                ...prev,

                {
                    id: Date.now() + 1,
                    type: "ai",
                    text: ai.answer,
                    intent: ai.intent || [],
                    agent: ai.agent || [],
                    priority: ai.priority,
                    escalate: ai.escalate,
                    ticket_number: ai.ticket_number,
                    response_time: ai.response_time,
                    time: new Date().toISOString()
                }

            ]);

        } catch (error) {

            console.error(error);

            toast.error("Unable to contact AI server.");

        } finally {

            setLoading(false);

        }

    };

    const clearChat = () => {

        setMessages([]);

        localStorage.setItem(

            "session_id",

            `session_${Date.now()}`

        );

        toast.success("New chat started.");

    };

    return {

        messages,

        loading,

        askQuestion,

        clearChat

    };

}
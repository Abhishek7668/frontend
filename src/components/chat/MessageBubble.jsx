import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
    Bot,
    User,
    Copy,
    Check,
    ThumbsUp,
    ThumbsDown
} from "lucide-react";

export default function MessageBubble({ message }) {

    const isUser = message.type === "user";

    const [copied, setCopied] = useState(false);

    const copyText = async () => {

        await navigator.clipboard.writeText(message.text);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        },2000);

    };

    return (

        <div

            className={`flex mb-8 fade-up ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}

        >

            <div

                className={`flex gap-4 max-w-[78%] ${
                    isUser
                        ? "flex-row-reverse"
                        : ""
                }`}

            >

                {/* Avatar */}

                <div

                    className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center shadow-lg ${
                        isUser
                            ? "bg-blue-600"
                            : "bg-gradient-to-r from-sky-500 to-blue-700"
                    }`}

                >

                    {

                        isUser

                            ?

                            <User size={22}/>

                            :

                            <Bot size={22}/>

                    }

                </div>

                {/* Bubble */}

                <div

                    className={`rounded-3xl px-6 py-5 shadow-xl border transition-all duration-300 ${
                        isUser

                            ?

                            "bg-blue-600 border-blue-500 text-white"

                            :

                            "bg-slate-800 border-slate-700 text-slate-100"
                    }`}

                >

                    {

                        !isUser &&

                        <div className="flex items-center justify-between mb-5">

                            <div>

                                <h3 className="font-bold text-cyan-400">

                                    AI Assistant

                                </h3>

                                <p className="text-xs text-slate-400">

                                    Powered by TechMart AI

                                </p>

                            </div>

                        </div>

                    }

                    <div className="markdown-body">

                        <ReactMarkdown

                            remarkPlugins={[remarkGfm]}

                        >

                            {message.text}

                        </ReactMarkdown>

                    </div>

                    {/* Footer */}

                    <div className="flex items-center justify-between mt-5">

                        <span className="text-xs text-slate-400">

                            {
                            new Date(message.time).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })


                            }

                        </span>

                        {

                            !isUser &&

                            <div className="flex items-center gap-3">

                                <button

                                    className="hover:text-cyan-400 transition"

                                    onClick={copyText}

                                >

                                    {

                                        copied

                                            ?

                                            <Check size={18}/>

                                            :

                                            <Copy size={18}/>

                                    }

                                </button>

                                <button className="hover:text-green-400 transition">

                                    <ThumbsUp size={18}/>

                                </button>

                                <button className="hover:text-red-400 transition">

                                    <ThumbsDown size={18}/>

                                </button>

                            </div>

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}
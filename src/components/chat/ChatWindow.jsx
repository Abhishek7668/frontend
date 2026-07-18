import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, loading }) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [messages, loading]);

    return (

        <div className="flex-1 overflow-y-auto bg-[#0B1120] px-10 py-8">

            {/* Empty State */}

            {
                messages.length === 0 && (

                    <div className="h-full flex flex-col items-center justify-center text-center">

                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center shadow-2xl">

                            <Bot
                                size={40}
                                className="text-white"
                            />

                        </div>

                        <h2 className="mt-6 text-2xl font-bold text-white">

                            AI Customer Support

                        </h2>

                        <p className="mt-3 max-w-xl text-slate-400">

                            Ask anything about products, pricing,
                            warranty, installation, orders or return
                            policy.

                        </p>

                    </div>

                )
            }

            {/* Messages */}

            {

                messages.map((msg, index) => (

                    <MessageBubble

                        key={index}

                        message={msg}

                    />

                ))

            }

            {/* Typing Indicator */}

            {

                loading && (

                    <div className="flex items-start gap-4 mb-8">

                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center">

                            <Bot
                                size={22}
                                className="text-white"
                            />

                        </div>

                        <div className="bg-slate-800 border border-slate-700 rounded-3xl px-6 py-5 shadow-xl">

                            <div className="flex gap-2">

                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>

                                <span
                                    className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                                    style={{ animationDelay: ".15s" }}
                                ></span>

                                <span
                                    className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
                                    style={{ animationDelay: ".30s" }}
                                ></span>

                            </div>

                            <p className="text-sm text-slate-400 mt-3">

                                AI is thinking...

                            </p>

                        </div>

                    </div>

                )

            }

            <div ref={bottomRef} />

        </div>

    );

}
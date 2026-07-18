import { useState, useRef, useEffect } from "react";
import { SendHorizontal, Paperclip } from "lucide-react";

export default function ChatInput({ onSend, loading }) {

    const [text, setText] = useState("");

    const textareaRef = useRef(null);

    useEffect(() => {

        if (!textareaRef.current) return;

        textareaRef.current.style.height = "0px";

        textareaRef.current.style.height =
            textareaRef.current.scrollHeight + "px";

    }, [text]);

    const handleSend = () => {

        if (!text.trim() || loading) return;

        onSend(text.trim());

        setText("");

    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            handleSend();

        }

    };

    return (

        <div className="chat-input border-t border-slate-800 bg-[#111827] px-8 py-3">

            <div className="flex items-end gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 shadow-md">

                {/* Attachment Button */}

                <button

                    type="button"

                    className="text-slate-400 hover:text-cyan-400 transition"

                    title="Coming Soon"

                >

                    <Paperclip size={18} />

                </button>

                {/* Input */}

                <textarea

                    ref={textareaRef}

                    rows={1}

                    value={text}

                    disabled={loading}

                    onChange={(e) => setText(e.target.value)}

                    onKeyDown={handleKeyDown}

                    placeholder="Ask anything about TechMart products..."

                    className="flex-1 resize-none bg-transparent text-white placeholder:text-slate-500 outline-none max-h-40 overflow-y-auto"

                />

                {/* Send */}

                <button

                    onClick={handleSend}

                    disabled={loading || !text.trim()}

                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                        loading || !text.trim()
                            ? "cursor-not-allowed bg-slate-700 text-slate-500"
                            : "bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105"
                    }`}

                >

                    <SendHorizontal size={18} />

                </button>

            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">

                <span>

                    Press <b>Enter</b> to send · <b>Shift + Enter</b> for new line

                </span>

                <span>

                    {text.length} / 1000

                </span>

            </div>

        </div>

    );

}
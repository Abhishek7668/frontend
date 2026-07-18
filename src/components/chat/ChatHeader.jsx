import { Bot, RotateCcw } from "lucide-react";

export default function ChatHeader({ onNewChat }) {

    return (

        <div className="border-b border-slate-800 bg-[#111827] px-8 py-1">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center shadow-xl">

                        <Bot
                            size={24}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h1 className="text-1xl font-bold text-white">

                            AI Customer Support

                        </h1>

                        <div className="flex items-center gap-2 mt-1">

                            <p className="text-sm text-slate-400">

                                Always here to help you

                            </p>

                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

                            <span className="text-green-400">

                                Online

                            </span>

                        </div>

                    </div>

                </div>

                <button

                    onClick={onNewChat}

                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"

                >

                    <RotateCcw size={16}/>

                    New Chat

                </button>

            </div>

        </div>

    );

}
import MainLayout from "../layouts/MainLayout";

import useChat from "../hooks/useChat";

import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import FAQSection from "../components/chat/FAQSection";

export default function Chat() {

    const {

        messages,

        loading,

        askQuestion,

        clearChat

    } = useChat();

    return (

        <MainLayout>

            <div className="flex h-full w-full flex-col bg-[#0B1120]">

                <ChatHeader

                    onNewChat={clearChat}

                />

                <ChatWindow

                    messages={messages}

                    loading={loading}

                />

                {

                    messages.length === 0 && (

                        <FAQSection

                            onQuestion={askQuestion}

                        />

                    )

                }

                <ChatInput

                    onSend={askQuestion}

                    loading={loading}

                />

                <div className="border-t border-slate-800 bg-[#0B1120] py-3 text-center text-xs text-slate-500">

                    Responses generated using

                    <span className="ml-1 font-semibold text-cyan-400">

                        TechMart Knowledge Base

                    </span>

                </div>

            </div>

        </MainLayout>

    );

}
import { Loader2 } from "lucide-react";

export default function Loader({
    text = "Loading...",
    fullScreen = false
}) {

    if (fullScreen) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-slate-950">
                <div className="flex flex-col items-center gap-4">

                    <Loader2
                        className="h-12 w-12 animate-spin text-cyan-400"
                    />

                    <p className="text-lg text-slate-300">

                        {text}

                    </p>

                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full items-center justify-center py-16">

            <div className="flex flex-col items-center gap-4">

                <Loader2
                    className="h-10 w-10 animate-spin text-cyan-400"
                />

                <p className="text-slate-400">

                    {text}

                </p>

            </div>

        </div>
    );
}
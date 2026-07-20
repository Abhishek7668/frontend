export default function StatCard({

    title,

    value,

    icon,

    color = "cyan"

}) {

    const colors = {

        cyan: {
            border: "border-cyan-500/30",
            bg: "bg-cyan-500/10",
            text: "text-cyan-400"
        },

        emerald: {
            border: "border-emerald-500/30",
            bg: "bg-emerald-500/10",
            text: "text-emerald-400"
        },

        amber: {
            border: "border-amber-500/30",
            bg: "bg-amber-500/10",
            text: "text-amber-400"
        },

        rose: {
            border: "border-rose-500/30",
            bg: "bg-rose-500/10",
            text: "text-rose-400"
        }

    };

    return (

        <div
            className={`
                rounded-2xl
                md:rounded-3xl
                border
                ${colors[color].border}
                bg-slate-900/80
                backdrop-blur-xl
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-cyan-500/10
                p-4
                md:p-6
                min-w-0
            `}
        >

            <div className="flex items-center justify-between gap-3">

                <div className="min-w-0">

                    <p className="text-xs md:text-sm text-slate-400 truncate">

                        {title}

                    </p>

                    <h2 className="mt-2 md:mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white">

                        {value ?? 0}

                    </h2>

                </div>

                <div
                    className={`
                        h-12
                        w-12
                        md:h-16
                        md:w-16
                        shrink-0
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        ${colors[color].bg}
                        ${colors[color].text}
                        shadow-lg
                    `}
                >

                    {icon}

                </div>

            </div>

        </div>

    );

}
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from "recharts";

const COLORS = [
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#3b82f6",
    "#ec4899"
];

export default function IntentChart({ data = [] }) {

    if (!data.length) {
        return (
            <div className="flex h-[360px] items-center justify-center text-slate-400">
                No intent data available
            </div>
        );
    }

    return (
        <div className="h-[380px] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 10,
                        bottom: 20
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#334155"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="intent"
                        stroke="#94a3b8"
                        tick={{
                            fill: "#cbd5e1",
                            fontSize: 12
                        }}
                    />

                    <YAxis
                        stroke="#94a3b8"
                        tick={{
                            fill: "#cbd5e1"
                        }}
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#0f172a",
                            border: "1px solid #334155",
                            borderRadius: "10px",
                            color: "#fff"
                        }}
                    />

                    <Bar
                        dataKey="count"
                        radius={[8, 8, 0, 0]}
                    >

                        {data.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />

                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}
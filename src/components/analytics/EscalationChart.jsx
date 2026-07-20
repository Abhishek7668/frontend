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
    "#ef4444",
    "#f59e0b",
    "#10b981"
];

export default function EscalationChart({ data }) {

    if (!data) {
        return (
            <div className="flex h-[22.5rem] items-center justify-center text-slate-400">
                No escalation data available
            </div>
        );
    }

    const chartData = [
        {
            priority: "High",
            count: data.high_priority || 0
        },
        {
            priority: "Medium",
            count: data.medium_priority || 0
        },
        {
            priority: "Low",
            count: data.low_priority || 0
        }
    ];

    return (

        <div className="h-[23.75rem] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 10,
                        bottom: 20
                    }}
                >

                    <CartesianGrid
                        stroke="#334155"
                        strokeDasharray="4 4"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="priority"
                        stroke="#94a3b8"
                        tick={{
                            fill: "#CBD5E1",
                            fontSize: 13
                        }}
                    />

                    <YAxis
                        stroke="#94a3b8"
                        tick={{
                            fill: "#CBD5E1"
                        }}
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#0f172a",
                            border: "1px solid #334155",
                            borderRadius: "12px",
                            color: "#fff"
                        }}
                    />

                    <Bar
                        dataKey="count"
                        radius={[10, 10, 0, 0]}
                    >

                        {chartData.map((item, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />

                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}
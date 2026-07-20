import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

export default function SessionChart({ data = [] }) {

    if (!data.length) {
        return (
            <div className="flex h-[22.5rem] items-center justify-center text-slate-400">
                No session data available
            </div>
        );
    }

    return (

        <div className="h-[23.75rem] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 10,
                        bottom: 20
                    }}
                >

                    <CartesianGrid
                        stroke="#334155"
                        strokeDasharray="5 5"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="session_id"
                        tickFormatter={(value, index) => `S${index + 1}`}
                        stroke="#94a3b8"
                        tick={{
                            fill: "#CBD5E1",
                            fontSize: 12
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
                        formatter={(value) => [`${value} Messages`, "Count"]}
                        labelFormatter={(value) => `Session : ${value}`}
                    />

                    <Line
                        type="monotone"
                        dataKey="messages"
                        stroke="#06b6d4"
                        strokeWidth={4}
                        dot={{
                            r: 5,
                            fill: "#06b6d4",
                            strokeWidth: 2,
                            stroke: "#fff"
                        }}
                        activeDot={{
                            r: 8
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );
}
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
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

export default function AgentChart({ data = [] }) {

    if (!data.length) {
        return (
            <div className="flex h-[22.5rem] items-center justify-center text-slate-400">
                No agent data available
            </div>
        );
    }

    return (
        <div className="h-[23.75rem] w-full">

            <ResponsiveContainer width="100%" height="100%">

                <PieChart
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 20
                    }}
                >

                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="agent"
                        cx="32%"
                        cy="50%"
                        innerRadius="24%"
                        outerRadius="55%"
                        paddingAngle={2}
                        label={({ value }) => value}
                        labelLine={true}
                    >

                        {data.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />

                        ))}

                    </Pie>

                    <Tooltip
                        contentStyle={{
                            background: "#0f172a",
                            border: "1px solid #334155",
                            borderRadius: "10px",
                            color: "#fff"
                        }}
                    />

                    <Legend
                        layout="vertical"
                        verticalAlign="middle"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{
                            color: "#fff",
                            paddingLeft: "20px",
                            lineHeight: "30px",
                            fontSize: "14px"
                        }}
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}
import MainLayout from "../layouts/MainLayout";

const cards = [
    {
        title: "Total Conversations",
        value: "1,245",
    },
    {
        title: "Resolved Tickets",
        value: "986",
    },
    {
        title: "Knowledge Articles",
        value: "152",
    },
    {
        title: "Active Users",
        value: "318",
    },
];

export default function Dashboard() {

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold text-white mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-6"
                    >

                        <p className="text-slate-400">
                            {card.title}
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-4">
                            {card.value}
                        </h2>

                    </div>

                ))}

            </div>

            <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6">

                <h2 className="text-xl font-semibold text-white mb-4">
                    Recent Activity
                </h2>

                <div className="space-y-4">

                    <div className="border-b border-slate-800 pb-3 text-slate-300">
                        ✅ Customer ticket resolved successfully.
                    </div>

                    <div className="border-b border-slate-800 pb-3 text-slate-300">
                        📄 New knowledge base uploaded.
                    </div>

                    <div className="border-b border-slate-800 pb-3 text-slate-300">
                        🤖 AI answered 54 customer queries today.
                    </div>

                    <div className="text-slate-300">
                        📈 Analytics updated successfully.
                    </div>

                </div>

            </div>

        </MainLayout>

    );

}
import React from "react";

function StatCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
            <div className="text-sm text-gray-500">{label}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
            <div className="flex gap-4 mb-6">
                <StatCard label="Users" value="1,234" />
                <StatCard label="Active" value="86%" />
                <StatCard label="Errors" value="12" />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
                <ul className="text-gray-700 list-disc ml-5">
                    <li>Server started</li>
                    <li>Daily backup completed</li>
                    <li>User signup: johndoe@example.com</li>
                </ul>
            </div>
        </section>
    );
}

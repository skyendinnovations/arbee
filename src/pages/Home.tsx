import React from "react";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="max-w-3xl mx-auto p-6">
                <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
                <p className="text-gray-600">This is a simple demo app showing a dashboard and client-side routing using hash-based routes.</p>
            </section>
        </>
    );
}

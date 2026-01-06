import React from "react";
import { NavLink } from "react-router-dom";

const baseClass = "px-3 py-2 rounded-md font-medium";
const activeClass = "bg-indigo-600 text-white";
const inactiveClass = "text-gray-700 hover:bg-gray-100";

export default function NavBar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `${baseClass} ${isActive ? activeClass : inactiveClass}`;

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <div className="text-xl font-bold">Arbee</div>
                    <nav className="flex items-center gap-2">
                        <NavLink to="/" end className={linkClass}>Home</NavLink>
                        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                        <NavLink to="/settings" className={linkClass}>Settings</NavLink>
                    </nav>
                </div>
                <div className="text-sm text-gray-500">Simple demo</div>
            </div>
        </header>
    );
}

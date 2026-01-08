import React from "react";
import { ShieldCheck, BadgeCheck, Clock, Users } from "lucide-react";

const features = [
	{
		icon: <ShieldCheck className="w-8 h-8 text-[#ff9900]" />,
		title: "Safety First",
		description:
			"We adhere to strict zero-accident policies and full OSHA compliance to ensure every site is safe for our team and clients.",
	},
	{
		icon: <BadgeCheck className="w-8 h-8 text-[#ff9900]" />,
		title: "Top Quality",
		description:
			"Premium materials and rigorous attention to detail are the foundation of our reputation. We never cut corners on your vision.",
	},
	{
		icon: <Clock className="w-8 h-8 text-[#ff9900]" />,
		title: "On-Time Delivery",
		description:
			"We respect your schedule. Our streamlined project management ensures we meet deadlines efficiently, every single time.",
	},
	{
		icon: <Users className="w-8 h-8 text-[#ff9900]" />,
		title: "Expert Team",
		description:
			"With decades of combined experience, our skilled engineers and builders bring deep industry knowledge to every project.",
	},
];

export default function WhyChooseUs() {
	return (
		<div className="bg-[#f7f7f5] flex flex-col items-center pt-8 px-4 pb-0 m-0">
			<div className="max-w-3xl text-center mb-8">
				<div className="text-sm tracking-widest text-[#ff9900] mb-2 font-bold uppercase">
					Our Core Values
				</div>
				<h1 className="text-4xl font-bold mb-4 text-[#232323]">
					Why Choose Us
				</h1>
				<div className="mx-auto w-16 h-1 bg-[#ff9900] rounded-full mb-6"></div>
				<p className="text-[#5a5a5a] text-lg">
					We deliver construction excellence through our unwavering commitment to
					safety, quality, timeliness, and decades of industry expertise.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-2">
				{features.map((feature) => (
					<div
						key={feature.title}
						className="group bg-white rounded-xl shadow-sm p-6 flex flex-col items-start border border-[#e2e2e2]
						transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
					>
						<div className="mb-4 bg-[#f3e7d1] rounded-lg p-2 flex items-center justify-center
						transition-transform duration-300 group-hover:scale-110">
							{feature.icon}
						</div>

						<h3 className="font-semibold text-lg mb-2 text-[#232323]">
							{feature.title}
						</h3>

						<p className="text-[#5a5a5a] text-sm leading-relaxed">
							{feature.description}
						</p>
					</div>
				))}
			</div>

			<button
				className="group relative bg-[#ff9900] text-white px-8 py-3 rounded-lg font-semibold text-base
				border-2 border-[#ff9900] overflow-hidden shadow-md flex items-center gap-2
				transition-colors duration-300 hover:text-[#ff9900] mt-2 mb-0"
			>
				<span
					className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100
					transition-transform origin-left duration-300 z-0"
					aria-hidden="true"
				/>
				<span className="relative z-10 flex items-center gap-2">
					Start Your Project
					<svg
						width="18"
						height="18"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						viewBox="0 0 24 24"
					>
						<line x1="5" y1="12" x2="19" y2="12" />
						<polyline points="12 5 19 12 12 19" />
					</svg>
				</span>
			</button>
		</div>
	);
}

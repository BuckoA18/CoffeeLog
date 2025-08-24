import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="w-screen bg-white shadow-inner shadow-black">
			<div className="flex justify-between items-center max-w-6xl h-25 p-3 mx-auto">
				<Link to="/">
					<h1 className="text-3xl font-extrabold text-orange-950">
						CoffeeLogger
					</h1>
				</Link>
				<button className="bg-orange-900 text-l p-3 rounded-4xl font-bold text-white hover:p-3.5 transition-all">
					<Link to="newlog">+ New Log</Link>
				</button>
			</div>
		</header>
	);
};

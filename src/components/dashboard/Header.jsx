import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
	return (
		<header className="w-screen bg-white shadow-inner shadow-black">
			<div className="flex justify-between items-center max-w-6xl h-25 p-3 mx-auto">
				<Link to="/">
					<h1 className="text-3xl font-extrabold text-orange-950 inline-block hover:pb-1 transition-all">
						CoffeeLogger
					</h1>
				</Link>

				<Button link="newlog" text="+ New Log" />
			</div>
		</header>
	);
};

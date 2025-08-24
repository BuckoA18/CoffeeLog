import React from "react";
import { Link } from "react-router-dom";

export const CoffeeCard = ({ coffeeInfo, onRemove }) => {
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;
	const roastColors = {
		light: "bg-orange-300",
		medium: "bg-orange-700",
		dark: "bg-orange-950",
	};
	const roastColor = roastColors[roast_level];
	console.log(roastColor);

	return (
		<div className="flex items-center justify-between gap-3  bg-neutral-50 rounded-xl p-5 shadow hover:p-10 transition-all ">
			<div className={`w-5 h-5 rounded-full ${roastColor}`}></div>
			<h1 className="text-xl font-medium">{name}</h1>
			<p>Roasted {roast_date}</p>
			<p>{notes}</p>

			<div className="flex gap-1 justify-center">
				<Link to={`${id}/edit`}>
					<button className="bg-orange-900 text-l py-2 px-5 rounded-4xl font-bold text-white">
						Edit
					</button>
				</Link>
				<button
					className="bg-orange-900 text-l py-2 px-5 rounded-4xl font-bold text-white"
					onClick={() => {
						onRemove(id);
					}}
				>
					Delete
				</button>
				<Link to={`coffee/${id}/recipes`}>
					<button className="bg-orange-900 text-l py-2 px-5 rounded-4xl font-bold text-white flex grow ">
						Recipes
					</button>
				</Link>
			</div>
		</div>
	);
};

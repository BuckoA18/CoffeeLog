import React from "react";
import { Link } from "react-router-dom";
import { EditLog } from "./EditLog";

export const CoffeeCard = ({ coffeeInfo, onRemove }) => {
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;

	const setRoastColor = () => {
		if (roast_level === "dark") return "950";
		if (roast_level === "medium") return "700";
		if (roast_level === "light") return "300";
	};

	return (
		<div className="flex gap-3 bg-gradient-to-b from-white to-stone-100 rounded-xl p-3 ">
			<div
				className={`w-5 h-5 rounded-full bg-orange-${setRoastColor()}`}
			></div>
			<h1 className="text-xl font-medium">{name}</h1>

			<p>Roasted: {roast_date}</p>
			<p>{notes}</p>

			<Link to={`${id}/edit`}>
				<button>Edit</button>
			</Link>
			<button
				onClick={() => {
					onRemove(id);
				}}
			>
				Delete
			</button>
			<Link to={`coffee/${id}/recipes`}>
				<button>Recipes</button>
			</Link>
		</div>
	);
};

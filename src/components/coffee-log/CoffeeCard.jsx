import React from "react";
import { Link } from "react-router-dom";
import { EditLog } from "./EditLog";

export const CoffeeCard = ({ coffeeInfo, onRemove }) => {
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;
	return (
		<div className="coffeelog__card">
			<h1>{name}</h1>
			<p>{roast_level} Roast</p>
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

import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipeInfo }) => {
	const {
		recipe_name,
		recipe_ratio,
		recipe_time,
		recipe_instructions,
		id: recipeId,
	} = recipeInfo;

	return (
		<div>
			{recipe_name} || {recipe_ratio} || {recipe_time} || {recipe_instructions}
			<Link to={`${recipeId}/edit`}>
				<button>edit</button>
			</Link>
		</div>
	);
};

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
		<div className="flex gap-10">
			<h1>{recipe_name}</h1>
			<p>{recipe_ratio}</p>
			<p>{recipe_time}</p>
			<p>{recipe_instructions}</p>
		</div>
	);
};

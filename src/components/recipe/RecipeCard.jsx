import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipeInfo }) => {
	const { recipe_method, recipe_ratio, id: recipeId } = recipeInfo;

	return (
		<div className="flex gap-10 px-3">
			<h1>{recipe_method}</h1>
			<span>{recipe_ratio}</span>
		</div>
	);
};

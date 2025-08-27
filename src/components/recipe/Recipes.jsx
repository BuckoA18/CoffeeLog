import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";

import { RecipeCard } from "./RecipeCard";
import { Button } from "../dashboard/Button";

export const Recipes = ({ coffeeId, recipes, setRecipes }) => {
	const handleRemove = async (recipeId) => {
		const { error, data } = await supabase
			.from("recipes")
			.delete()
			.eq("id", recipeId)
			.select();
		if (error) {
			console.log("Recepe delete error: ", error);
		}
		console.log("Recepe deleted: ", data);
		setRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
	};

	if (recipes.length < 1)
		return (
			<>
				<h1>No Recipes Yet..</h1>
				<div className="mx-auto">
					<Button link={`/${coffeeId}/newrecipe`} icon="fa-plus" />
				</div>
			</>
		);

	return (
		<div className="shadow rounded-xl py-5">
			{recipes.map((recipe) => (
				<RecipeCard
					key={recipe.id}
					recipeInfo={recipe}
					handleRemove={handleRemove}
				/>
			))}

			<Button link={`/${coffeeId}/newrecipe`} icon="fa-plus" />
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";

import { RecipeCard } from "./RecipeCard";
import { Button } from "../dashboard/Button";

export const Recipes = ({
	coffeeId: id,
	recipes,
	setRecipes,
	refetchRecipes,
}) => {
	useEffect(() => {
		refetchRecipes();
	}, []);
	const handleDelete = async (recipeId) => {
		const { error, data } = await supabase
			.from("recipes")
			.delete()
			.eq("id", recipeId)
			.select();
		if (error) {
			console.log("Error on Delete");
		}
		console.log("Deleted: ", data);
		setRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
	};

	const coffeeRecipes = recipes?.filter((recipe) => recipe.coffee_id === id);

	if (coffeeRecipes.length < 1)
		return (
			<>
				<h1>No Recipes Yet..</h1>
				<div className="mx-auto">
					<Button link={`/${id}/newrecipe`} icon="fa-plus" />
				</div>
			</>
		);

	return (
		<>
			<div>
				{coffeeRecipes.map((recipe) => (
					<RecipeCard
						key={recipe.id}
						recipeInfo={recipe}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className="mx-auto">
				<Button link={`/${id}/newrecipe`} icon="fa-plus" />
			</div>
		</>
	);
};

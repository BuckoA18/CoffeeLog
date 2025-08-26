import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";
import { useParams, Link } from "react-router-dom";
import { RecipeCard } from "./RecipeCard";
import { Button } from "../dashboard/Button";
import { icon } from "@fortawesome/fontawesome-svg-core";

export const Recipes = ({ coffeeId: id }) => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const { error, data } = await supabase
				.from("recipes")
				.select()
				.eq("coffee_id", id)
				.order("id", { ascending: false });
			if (error) {
				console.log("Fetch error: ", error);
			}
			setRecipes(data);
			console.log(`Recipes ${id}`, data);
		};

		fetchRecipes();
	}, []);

	if (!recipes.length > 0)
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
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipeInfo={recipe} />
				))}
			</div>
			<div className="mx-auto">
				<Button link={`/${id}/newrecipe`} icon="fa-plus" />
			</div>
		</>
	);
};

import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";
import { useParams, Link } from "react-router-dom";
import { RecipeCard } from "./RecipeCard";

export const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const { id } = useParams();

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
			console.log("Recipes: ", recipes);
		};
		fetchRecipes();
	}, []);

	return (
		<div>
			<h1>Coffee id: {id}</h1>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipeInfo={recipe} />
			))}
			<Link to="newrecipe">
				<button>Create new recipe</button>
			</Link>
		</div>
	);
};
//Create component recipeCard that shows the recipe info
//Create add function that adds recipes from the form

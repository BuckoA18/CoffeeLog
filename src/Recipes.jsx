import React, { useEffect, useState } from "react";
import { supabase } from "../config/supaBaseClient";
import { useParams } from "react-router-dom";

export const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchRecipes = async () => {
			const { error, data } = await supabase
				.from("recipes")
				.select()
				.eq("coffee_id", id);

			if (error) {
				console.log("Fetch error: ", error);
			}
			setRecipes(data);
		};
		fetchRecipes();
	}, []);

	console.log(recipes);
	return (
		<div>
			<h1>Coffee id: {id}</h1>
			<button>Create new recipe</button>
		</div>
	);
};
//Create component recipeCard that shows the recipe info
//Create add function that adds recipes from the form

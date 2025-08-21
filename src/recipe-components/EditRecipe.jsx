import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supaBaseClient";

export const EditRecipe = () => {
	const { recipeId } = useParams();

	const [editedRecipe, setEditedRecipe] = useState({
		recipe_name: "",
		recipe_ratio: "",
		recipe_time: "",
		recipe_instructions: "",
	});

	useEffect(() => {
		const fetchRecipe = async () => {
			const { error, data } = await supabase
				.from("recipes")
				.select("*")
				.eq("id", recipeId)
				.single();
			if (error) {
				console.log("Fetch error: ", error);
			}
			setEditedRecipe(data);
			console.log("Recipe fetched: ", data);
		};
		fetchRecipe();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedRecipe((prev) => ({ ...prev, [name]: value }));
	};

	const editRecipe = async (e) => {
		e.preventDefault();
		const { error, data } = await supabase
			.from("recipes")
			.update(editedRecipe)
			.eq("id", recipeId)
			.select()
			.single();

		if (error) {
			console.log("Insert error: ", error);
		}
		setEditedRecipe(data);
		console.log("Data saved: ", data);
	};

	return (
		<form
			onSubmit={(e) => {
				editRecipe(e);
			}}
		>
			<input
				type="text"
				name="recipe_name"
				value={editedRecipe.recipe_name}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<input
				type="text"
				name="recipe_ratio"
				value={editedRecipe.recipe_ratio}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<input
				type="number"
				name="recipe_time"
				value={editedRecipe.recipe_time}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<textarea
				name="recipe_instructions"
				value={editedRecipe.recipe_instructions}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<button>Save</button>
		</form>
	);
};

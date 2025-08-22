import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../config/supaBaseClient";

export const NewRecipe = () => {
	const { id } = useParams();
	const [newRecipe, setNewRecipe] = useState({
		coffee_id: id,
		recipe_name: "",
		recipe_ratio: "",
		recipe_time: "",
		recipe_instructions: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewRecipe((prev) => ({ ...prev, [name]: value }));
	};

	const addRecipe = async (e) => {
		e.preventDefault();
		console.log("coffee id: ", id);
		const { error, data } = await supabase
			.from("recipes")
			.insert(newRecipe)
			.select();
		if (error) {
			console.log("Insert error: ", error);
		}
		console.log("newRecipe added: ", data);
	};
	console.log(newRecipe);

	return (
		<form
			onSubmit={(e) => {
				addRecipe(e);
			}}
		>
			<input
				type="text"
				name="recipe_name"
				value={newRecipe.recipe_name}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<input
				type="text"
				name="recipe_ratio"
				value={newRecipe.recipe_ratio}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<input
				type="text"
				name="recipe_time"
				value={newRecipe.recipe_time}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<textarea
				name="recipe_instructions"
				value={newRecipe.recipe_intructions}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<button>Add newRecipe</button>
		</form>
	);
};

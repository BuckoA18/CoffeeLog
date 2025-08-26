import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../config/supaBaseClient";
import { TextInput } from "../forms/TextInput";
import { Button } from "../dashboard/Button";
import { Steps } from "../forms/Steps";

export const NewRecipe = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [newRecipe, setNewRecipe] = useState({
		coffee_id: id,
		recipe_method: "",
		recipe_ratio: "",
		steps: {},
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.startsWith("step_")) {
			// Update a step in steps object
			setNewRecipe((prev) => ({
				...prev,
				steps: { ...prev.steps, [name]: value },
			}));
		} else {
			// Update other recipe fields
			setNewRecipe((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("coffee id: ", id);
		const { error, data } = await supabase
			.from("recipes")
			.insert(newRecipe)
			.select("*");
		if (error) {
			console.log("Insert error: ", error);
		}
		console.log("newRecipe added: ", data);
		navigate("/");
	};
	return (
		<form
			className="flex flex-col gap-3 mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<TextInput
				name="recipe_method"
				value={newRecipe.recipe_method}
				labelName="Method"
				onChange={handleChange}
			/>

			<TextInput
				name="recipe_ratio"
				value={newRecipe.recipe_ratio}
				labelName="Ratio (coffee:water)"
				onChange={handleChange}
			/>

			<Steps recipeSteps={newRecipe.steps} handleChange={handleChange} />

			<Button text="Add" type="sumbit" />
		</form>
	);
};

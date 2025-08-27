import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../config/supaBaseClient";
import { TextInput } from "../forms/TextInput";
import { StepsInput } from "../forms/StepsInput";
import { Button } from "../dashboard/Button";
export const EditRecipe = () => {
	const navigate = useNavigate();
	const { recipeId } = useParams();

	const [recipe, setRecipe] = useState({
		recipe_method: "",
		recipe_ratio: "",
		recipe_steps: [],
	});

	useEffect(() => {
		const fetchRecipe = async () => {
			const { error, data } = await supabase
				.from("recipes")
				.select()
				.eq("id", recipeId)
				.single();
			if (error) {
				console.log("Fetch error: ", error);
			}
			setRecipe(data);
			console.log("Recipe fetched: ", data);
		};
		fetchRecipe();
	}, []);

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		if (name.startsWith("step_")) {
			setRecipe((prev) => {
				const updatedSteps = [...prev.recipe_steps];
				updatedSteps[index] = {
					...updatedSteps[index],
					step: index + 1,
					instruction: value,
				};
				console.log(updatedSteps);
				return { ...prev, recipe_steps: updatedSteps };
			});

			return;
		}
		setRecipe((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, data } = await supabase
			.from("recipes")
			.update(recipe)
			.eq("id", recipeId)
			.select()
			.single();

		if (error) {
			console.log("Insert error: ", error);
		}
		setRecipe(data);
		console.log("Data saved: ", data);
	};

	return (
		<form
			className="flex flex-col gap-3 mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				handleSubmit(e);
				navigate("/");
			}}
		>
			<TextInput
				name="recipe_method"
				value={recipe.recipe_method}
				labelName="Method"
				onChange={handleChange}
			/>

			<TextInput
				name="recipe_ratio"
				value={recipe.recipe_ratio}
				labelName="Ratio (coffee:water)"
				onChange={handleChange}
			/>

			<StepsInput recipe_steps={recipe.recipe_steps} onChange={handleChange} />

			<Button text="Add" type="sumbit" />
		</form>
	);
};

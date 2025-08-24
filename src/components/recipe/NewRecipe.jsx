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
			className="flex flex-col mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				addRecipe(e);
			}}
		>
			<label for="recipe_name" className="mb-1 text-lg">
				Name
			</label>
			<input
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				type="text"
				name="recipe_name"
				value={newRecipe.recipe_name}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<label for="recipe_ratio" className="mt-5 mb-1 text-lg">
				Ratio ( coffee : water )
			</label>
			<input
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				type="text"
				name="recipe_ratio"
				value={newRecipe.recipe_ratio}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<label for="recipe_time" className="mt-5 mb-1 text-lg">
				Time
			</label>
			<input
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				type="text"
				name="recipe_time"
				value={newRecipe.recipe_time}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
			<label for="recipe_instructions" className="mt-5 mb-1 text-lg">
				Instructions
			</label>
			<textarea
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				name="recipe_instructions"
				value={newRecipe.recipe_intructions}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<button className="mt-5 text-lg bg-orange-900 text-white py-2 rounded-xl font-bold hover:py-2.5 transition-all hover:cursor-pointer">
				Add newRecipe
			</button>
		</form>
	);
};

import React, { useEffect, useState } from "react";
import { CoffeeCard } from "../coffee-log/CoffeeCard";
import { supabase } from "../../../config/supaBaseClient";

export const CoffeeLog = ({ coffees, setCoffees, setRecipes, recipes }) => {
	const handleRemove = async (id) => {
		const { data: reccipeData, error: recipeError } = await supabase
			.from("recipes")
			.delete()
			.eq("coffee_id", id)
			.select();
		if (recipeError) {
			console.log("Delete error on recipe: ", recipeError);
		}
		console.log("Recipes removed: ", reccipeData);
		setRecipes((prev) => prev.filter((recipe) => recipe.coffee_id !== id));

		const { data: coffeeData, error: coffeeError } = await supabase
			.from("coffees")
			.delete()
			.eq("id", id)
			.select();
		if (coffeeError) {
			console.log("Delete error on coffee: ", coffeeError);
		}
		console.log("Coffee removed: ", coffeeData);
		setCoffees((prev) => prev.filter((coffee) => coffee.id !== id));
	};
	return (
		<div className=" p-8 w-full bg-white rounded-xl shadow-2xl">
			<h1 className="text-2xl font-bold">Recent Logs:</h1>
			<p className="mb-3">Your recently logged coffees</p>
			<div className="flex flex-col gap-3">
				{coffees.map((coffee) => (
					<CoffeeCard
						coffeeInfo={coffee}
						key={coffee.id}
						onRemove={handleRemove}
						recipes={recipes}
						setRecipes={setRecipes}
					/>
				))}
			</div>
		</div>
	);
};

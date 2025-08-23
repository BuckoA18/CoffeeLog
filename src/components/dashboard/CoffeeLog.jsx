import React, { useEffect, useState } from "react";
import { CoffeeCard } from "../coffee-log/CoffeeCard";
import { supabase } from "../../../config/supaBaseClient";

export const CoffeeLog = ({ coffees, setCoffees, recipes }) => {
	if (!coffees) return <h1>Loading...</h1>;

	const handleRemove = async (id) => {
		const { data: reccipeData, error: recipeError } = await supabase
			.from("recipes")
			.delete()
			.eq("coffee_id", id)
			.select();
		if (recipeError) {
			console.log("Delete error on recipe: ", error);
			return;
		}
		console.log("Recipes removed: ", reccipeData);

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
		<div className="mt-10 p-8 w-full bg-white rounded-xl">
			<h1 className="text-2xl font-bold">Recent Logs:</h1>
			<p className="mb-3">Your recently logged coffees</p>
			{coffees.map((coffee) => (
				<CoffeeCard
					coffeeInfo={coffee}
					key={coffee.id}
					onRemove={handleRemove}
				/>
			))}
		</div>
	);
};

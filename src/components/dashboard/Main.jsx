import { Stats } from "./Stats";
import { Actions } from "./Actions";
import { CoffeeLog } from "./CoffeeLog";
import { supabase } from "../../../config/supaBaseClient";

import React, { useState, useEffect } from "react";

export const Main = () => {
	const [coffees, setCoffees] = useState([]);
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchCoffees = async () => {
			const { error, data } = await supabase
				.from("coffees")
				.select()
				.order("id", { ascending: false }); // new log will aways be first
			if (error) {
				console.log("Fetch error: ", err);
			}
			setCoffees(data);
			console.log("Coffees: ", data);
		};
		fetchCoffees();

		const fetchRecipes = async () => {
			const { error, data } = await supabase.from("recipes").select();
			if (error) {
				console.log("Fetch error: ", err);
			}
			setRecipes(data);
			console.log("Recipes:  ", data);
		};
		fetchRecipes();
	}, []);

	return (
		<div className="flex flex-col gap-3 mx-auto max-w-6xl">
			<Stats coffees={coffees} recipes={recipes} />
			<Actions />
			<CoffeeLog
				coffees={coffees}
				recipes={recipes}
				setCoffees={setCoffees}
				setRecipes={setRecipes}
			/>
		</div>
	);
};

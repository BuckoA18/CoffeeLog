import React, { useEffect, useState } from "react";
import { CoffeeCard } from "./coffee-components/CoffeeCard";
import { supabase } from "../config/supaBaseClient";

export const Home = () => {
	const [coffees, setCoffees] = useState(null);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCoffes = async () => {
			const { error, data } = await supabase
				.from("coffees")
				.select()
				.order("id", { ascending: false }); // new log will aways be first
			if (error) {
				setFetchError(error);
				console.log(error);
			}
			if (data.length > 0) {
				setCoffees(data);
				console.log("data: ", data);
			}
		};
		fetchCoffes()
			.catch((err) => {
				setFetchError(err);
				console.log(fetchError);
			})
			.finally(() => setIsLoading(false));
	}, []);

	// const editCoffee = async (id) => {
	// 	const { error, data } = supabase.from("coffees").update();
	// };

	const removeRecipes = async (id) => {
		const { error } = await supabase
			.from("recipes")
			.delete()
			.select("*")
			.eq("coffee_id", id);
		if (error) {
			console.log(error);
		}
	};

	const removeCoffee = async (id) => {
		const { error } = await supabase.from("coffees").delete().eq("id", id);
		if (error) {
			console.log("Error on remove: ", error);
			return;
		}
		setCoffees((prevCoffees) =>
			prevCoffees.filter((coffee) => coffee.id !== id)
		);
		console.log("removed id: ", id);
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (!coffees) return <h1>First you must add a new coffee</h1>;

	return coffees.map((coffee) => (
		<CoffeeCard
			coffeeInfo={coffee}
			removeCoffee={removeCoffee}
			removeRecipes={removeRecipes}
			key={coffee.id}
		/>
	));
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../config/supaBaseClient";

export const EditLog = () => {
	const { id } = useParams();
	const [coffee, setCoffee] = useState({});
	sdds;

	useEffect(() => {
		const fetchCoffee = async () => {
			const { error, data } = await supabase
				.from("coffees")
				.select("*")
				.eq("id", id)
				.single();
			if (error) {
				console.log("Fetch error: ", error);
			}
			setCoffee(data);
			// console.log(data);
		};
		fetchCoffee();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCoffee((prev) => ({ ...prev, [name]: value }));
	};

	const handleSave = async (e) => {
		e.preventDefault();
		const { error, data } = await supabase
			.from("coffees")
			.update(coffee)
			.eq("id", id)
			.select()
			.single();
		if (error) {
			console.log("Edit error: ", error);
		}
		setCoffee(data);
		console.log("Data saved: ", data);
	};

	return (
		<form>
			<input
				type="text"
				name="name"
				value={coffee.name}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<select
				name="roast_level"
				value={coffee.roast_level}
				onChange={(e) => {
					handleChange(e);
				}}
			>
				<option value="light">Light</option>
				<option value="medium">Medium</option>
				<option value="dark">Dark</option>
			</select>

			<input
				name="roast_date"
				type="date"
				value={coffee.roast_date}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<textarea
				name="notes"
				value={coffee.notes}
				onChange={(e) => handleChange(e)}
			/>

			<button
				onClick={(e) => {
					handleSave(e);
				}}
			>
				Save
			</button>
		</form>
	);
};

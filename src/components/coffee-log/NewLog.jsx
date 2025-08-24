import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";

export const NewLog = () => {
	const [newCofee, setNewCofee] = useState({
		name: "",
		roast_level: "medium",
		roast_date: "",
		notes: "",
	});
	const insertCoffees = async () => {
		const { error, data } = await supabase
			.from("coffees")
			.insert(newCofee)
			.select();
		if (error) {
			console.log("Error: ", error);
			return;
		}
		console.log("Inserted: ", data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		insertCoffees();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCofee((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form
			className="flex flex-col mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<label for="name" className="mb-1 text-lg">
				Name
			</label>
			<input
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				type="text"
				name="name"
				value={newCofee.name}
				onChange={(e) => {
					handleChange(e);
				}}
				required
			/>
			<label for="roast_level" className="mt-5 mb-1 text-lg">
				Roast
			</label>
			<select
				className="border-1 appearance-none border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				name="roast_level"
				value={newCofee.roast_level}
				onChange={(e) => {
					handleChange(e);
				}}
			>
				<option value="light">Light</option>
				<option value="medium">Medium</option>
				<option value="dark">Dark</option>
			</select>
			<label for="roast_date" className="mt-5 mb-1 text-lg">
				Date of
			</label>
			<input
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				type="date"
				name="roast_date"
				value={newCofee.roast_date}
				onChange={(e) => {
					handleChange(e);
				}}
				required
			/>
			<label for="notes" className="mt-5 mb-1 text-lg">
				Your notes
			</label>
			<textarea
				className="border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
				name="notes"
				value={newCofee.notes}
				onChange={(e) => {
					handleChange(e);
				}}
			></textarea>

			<button className="mt-5 text-lg bg-orange-900 text-white py-2 rounded-xl font-bold hover:py-2.5 transition-all hover:cursor-pointer">
				Add
			</button>
		</form>
	);
};

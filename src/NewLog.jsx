import React, { useState } from "react";

export const NewLog = () => {
	const [newCofee, setNewCofee] = useState({
		name: "",
		roast_level: "medium",
		roast_date: "",
		notes: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCofee((prev) => ({ ...prev, [name]: value }));
		console.log(name, value);
	};

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<input
				type="text"
				name="name"
				value={newCofee.name}
				onChange={(e) => {
					handleChange(e);
				}}
				required
			/>

			<select
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

			<input
				type="date"
				name="roast_date"
				value={newCofee.roast_date}
				onChange={(e) => {
					handleChange(e);
				}}
			/>

			<button>Add</button>
		</form>
	);
};

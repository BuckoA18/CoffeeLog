import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supaBaseClient";
import { Button } from "../dashboard/Button";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../forms/TextInput";
import { SelectInput } from "../forms/SelectInput";
import { DateInput } from "../forms/DateInput";
import { TextareaInput } from "../forms/TextareaInput";

export const NewLog = () => {
	const navigate = useNavigate();
	const [newCofee, setNewCofee] = useState({
		name: "",
		roast_level: "medium",
		roast_date: "",
		notes: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const insertCoffees = async () => {
			const { error, data } = await supabase
				.from("coffees")
				.insert(newCofee)
				.select();
			if (error) {
				console.log("Error: ", error);
				return;
			}
			console.log("Coffee inserted: ", data);
			navigate("/");
		};
		insertCoffees();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewCofee((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form
			className="flex flex-col gap-5 mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<div className="mb-5">
				<h1 className="text-3xl font-bold">New Log</h1>
				<p>Information about your new coffee</p>
			</div>
			<TextInput
				name="name"
				value={newCofee.name}
				labelName="Name"
				onChange={handleChange}
				isRequired={true}
			/>

			<SelectInput
				labelName="Roast"
				name="roast_level"
				value={newCofee.roast_level}
				onChange={handleChange}
				options={["Light", "Medium", "Dark"]}
			/>

			<DateInput
				labelName="Roasted"
				name="roast_date"
				value={newCofee.roast_date}
				onChange={handleChange}
			/>

			<TextInput
				name="notes"
				value={newCofee.notes}
				labelName="Notes"
				onChange={handleChange}
			/>

			<Button text="Add" type="sumbit" />
		</form>
	);
};

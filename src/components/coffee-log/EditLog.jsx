import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../../config/supaBaseClient";
import { Button } from "../dashboard/Button";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../forms/TextInput";
import { SelectInput } from "../forms/SelectInput";
import { DateInput } from "../forms/DateInput";
import { TextareaInput } from "../forms/TextareaInput";

export const EditLog = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [coffee, setCoffee] = useState({});

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

	const handleSubmit = async (e) => {
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
		navigate("/");
	};

	return (
		<form
			className="flex flex-col gap-3 mt-40 bg-white w-xl mx-auto shadow-2xl rounded-2xl p-10"
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<TextInput
				name="name"
				value={coffee.name}
				labelName="Name"
				onChange={handleChange}
			/>

			<SelectInput
				labelName="Roast"
				name="roast_level"
				value={coffee.roast_level}
				onChange={handleChange}
				options={["Light", "Medium", "Dark"]}
			/>

			<DateInput
				labelName="Roasted"
				name="roast_date"
				value={coffee.roast_date}
				onChange={handleChange}
			/>

			<TextareaInput
				labelName="Notes"
				name="notes"
				value={coffee.notes}
				onChange={handleChange}
			/>

			<Button text="Add" type="sumbit" />
		</form>
	);
};

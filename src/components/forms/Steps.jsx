import React, { useState } from "react";
import { Button } from "../dashboard/Button";
import { TextInput } from "./TextInput";

export const Steps = ({ recipeSteps = {}, handleChange }) => {
	const [stepNumbers, setStepNumbers] = useState([1]);

	const handleClick = () => {
		setStepNumbers((prev) => [...prev, prev.at(-1) + 1]);
	};

	return (
		<div className="flex flex-col gap-3">
			<Button icon="fa-plus" func={handleClick} />
			{stepNumbers.map((num) => (
				<TextInput
					key={num}
					labelName={`Step ${num}`}
					name={`step_${num}`}
					value={recipeSteps[`step_${num}`] || ""}
					onChange={handleChange}
				/>
			))}
		</div>
	);
};

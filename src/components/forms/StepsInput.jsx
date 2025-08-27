import React, { useEffect, useState } from "react";
import { TextInput } from "./TextInput";
import { Button } from "../dashboard/Button";

export const StepsInput = ({ recipe_steps, onChange }) => {
	const [stepCounter, setStepCounter] = useState([0]);

	useEffect(() => {
		if (recipe_steps?.length) {
			setStepCounter(recipe_steps.map((_, index) => index));
		}

		console.log("mounted");
	}, [recipe_steps]);
	console.log("stepCounter", stepCounter);

	const handleClick = () => {
		setStepCounter((prev) => [...prev, prev.at(-1) + 1]);
	};
	return (
		<div>
			<Button icon="fa-plus" func={handleClick} />
			<div>
				{stepCounter.map((step, index) => (
					<TextInput
						key={step}
						labelName={step}
						name={`step_${step}`}
						onChange={(e) => {
							onChange(e, index);
						}}
						value={recipe_steps[index]?.instruction || ""}
					/>
				))}
			</div>
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { TextInput } from "./TextInput";
import { Button } from "../dashboard/Button";

export const StepsInput = ({ recipe_steps, onChange }) => {
	const [stepCounter, setStepCounter] = useState([0]);
	const [isStepsOpen, setIsStepsOpen] = useState(false);

	useEffect(() => {
		if (recipe_steps?.length) {
			setStepCounter(recipe_steps.map((_, index) => index));
		}

		console.log("mounted");
	}, [recipe_steps]);

	const handleClick = () => {
		setStepCounter((prev) => [...prev, prev.at(-1) + 1]);
	};

	const handleToggle = () => {
		setIsStepsOpen((prev) => !prev);
	};
	return (
		<div>
			<h1>Instructions</h1>
			<Button
				icon={`fa-toggle-${isStepsOpen ? "on" : "off"}`}
				func={handleToggle}
			/>
			<div className={`${isStepsOpen ? "flex" : "hidden"} flex-col`}>
				{stepCounter.map((step, index) => (
					<TextInput
						key={step}
						labelName={`${step + 1}.`}
						name={`step_${step}`}
						onChange={(e) => {
							onChange(e, index);
						}}
						value={recipe_steps[index]?.instruction || ""}
					/>
				))}
				<Button icon="fa-plus" func={handleClick} />
			</div>
		</div>
	);
};

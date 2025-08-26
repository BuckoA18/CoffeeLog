import React from "react";
import { TextInput } from "./TextInput";

export const StepsInput = ({ step, value, onChange, name }) => {
	console.log(name);

	return (
		<div>
			<TextInput
				labelName={`Step: ${step + 1}`}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

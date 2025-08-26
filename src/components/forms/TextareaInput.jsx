import React from "react";

export const TextareaInput = ({ name, value, onChange, labelName }) => {
	return (
		<div>
			<label htmlFor={name} className="text-xl block">
				{labelName}
			</label>
			<textarea
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				className="w-full border-1 appearance-none border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
			/>
		</div>
	);
};

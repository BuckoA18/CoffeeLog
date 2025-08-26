import React from "react";

export const TextInput = ({ name, value, labelName, onChange }) => {
	return (
		<div>
			<label htmlFor={name} className="text-xl block">
				{labelName}
			</label>
			<input
				id={name}
				name={name}
				value={value}
				type="text"
				onChange={onChange}
				required
				className="w-full border-1 appearance-none border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
			/>
		</div>
	);
};

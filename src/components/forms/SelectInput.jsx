import React from "react";

export const SelectInput = ({ options, name, value, onChange, labelName }) => {
	return (
		<div>
			<label htmlFor={name} className="text-xl block">
				{labelName}
			</label>
			<select
				id={name}
				value={value}
				name={name}
				onChange={onChange}
				className="w-full border-1 border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:border-orange-950
				focus:ring-1 focus:ring-orange-950"
			>
				{options.map((option) => (
					<option key={option} value={option.toLowerCase()}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

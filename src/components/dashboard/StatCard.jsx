import React from "react";

export const StatCard = ({ text, value }) => {
	return (
		<div className="flex flex-col justify-center items-center grow-1 bg-white rounded-xl h-30">
			<h1 className="text-2xl font-bold">{value}</h1>
			<p className="stats__card__value">{text}</p>
		</div>
	);
};

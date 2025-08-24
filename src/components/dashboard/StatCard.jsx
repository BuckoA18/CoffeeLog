import React from "react";

export const StatCard = ({ text, value }) => {
	return (
		<div className="flex flex-col justify-center items-center grow bg-white shadow-2xl rounded-xl h-30 hover:p-10 transition-all">
			<h1 className="text-3xl font-bold">{value}</h1>
			<p className="">{text}</p>
		</div>
	);
};

import React from "react";

export const StatCard = ({ text, value }) => {
	return (
		<div className="stats__card">
			<h1>{value}</h1>
			<p>{text}</p>
		</div>
	);
};

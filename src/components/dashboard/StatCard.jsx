import React from "react";

export const StatCard = ({ text, value }) => {
	return (
		<div className="stats__card">
			<h1 className="stats__card__title">{value}</h1>
			<p className="stats__card__value">{text}</p>
		</div>
	);
};

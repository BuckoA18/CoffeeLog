import React from "react";
import { StatCard } from "./StatCard";

export const Stats = () => {
	return (
		<div className="stats">
			<StatCard text="Coffes Logged" />
			<StatCard text="Recipes Learned" />
		</div>
	);
};

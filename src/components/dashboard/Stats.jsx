import React, { useEffect, useState } from "react";
import { StatCard } from "./StatCard";

export const Stats = ({ coffees, recipes }) => {
	return (
		<div className="flex flex-col gap-5 mt-5 sm:flex-row sm:justify-center sm:items-center sm:gap-5 sm:mt-20">
			<StatCard text="Coffes Logged" value={coffees.length} />
			<StatCard text="Recipes Learned" value={recipes.length} />
		</div>
	);
};

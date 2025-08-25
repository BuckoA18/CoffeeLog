import React, { useEffect, useState } from "react";
import { StatCard } from "./StatCard";

export const Stats = ({ coffees, recipes }) => {
	return (
		<div className="flex justify-center items-center gap-5 mt-20 ">
			<StatCard text="Coffes Logged" value={coffees.length} />
			<StatCard text="Recipes Learned" value={recipes.length} />
		</div>
	);
};

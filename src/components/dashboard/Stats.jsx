import React, { useEffect, useState } from "react";
import { StatCard } from "./StatCard";
import { supabase } from "../../../config/supaBaseClient";

export const Stats = ({ coffees, recipes }) => {
	return (
		<div className="stats">
			<StatCard text="Coffes Logged" value={coffees.length} />
			<StatCard text="Recipes Learned" value={recipes.length} />
		</div>
	);
};

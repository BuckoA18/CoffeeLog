import React, { useEffect, useState } from "react";
import { StatCard } from "./StatCard";
import { supabase } from "../../../config/supaBaseClient";

export const Stats = ({ coffees, recipes }) => {
	return (
		<div className="flex justify-center gap-10 mt-25">
			<StatCard text="Coffes Logged" value={coffees.length} />
			<StatCard text="Recipes Learned" value={recipes.length} />
		</div>
	);
};

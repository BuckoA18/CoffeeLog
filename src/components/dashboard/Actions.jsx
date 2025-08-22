import React from "react";
import { ActionCard } from "./ActionButton";
import { Link } from "react-router-dom";

export const Actions = () => {
	return (
		<div className="actions">
			<ActionCard text="New Coffee Log" link="newlog" />
			{/* <ActionCard text="Create Recipe" /> */}
			{/* <ActionCard text="View Calendar" /> */}
			{/* <ActionCard text="Quick Brew" /> */}
		</div>
	);
};

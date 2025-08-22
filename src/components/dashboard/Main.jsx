import { Stats } from "./Stats";
import { Actions } from "./Actions";
import { CoffeeLog } from "./CoffeeLog";

import React from "react";

export const Main = () => {
	return (
		<div className="main">
			<Stats />
			<Actions />
			<CoffeeLog />
		</div>
	);
};

import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="header">
			<div>
				<Link to="/">
					<h1>BrewLogger</h1>
				</Link>
				<button>
					<Link to="newlog">+ New Log</Link>
				</button>
			</div>
		</header>
	);
};

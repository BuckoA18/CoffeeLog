import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/">
					<h1 className="header__title">BrewLogger</h1>
				</Link>
				<button className="header__button">
					<Link to="newlog">+ New Log</Link>
				</button>
			</div>
		</header>
	);
};

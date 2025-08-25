import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ link, text, icon, func, id }) => {
	if (!text)
		return (
			<Link to={link}>
				<div
					onClick={() => {
						if (!func) return;
						func(id);
					}}
				>
					<FontAwesomeIcon icon={`fa-solid ${icon}`} />
				</div>
			</Link>
		);
	return (
		<Link to={link}>
			<div className="bg-orange-900 text-white text-xl font-normal px-3 py-2 rounded-xl hover:scale-105 transition-all ">
				{text}
			</div>
		</Link>
	);
};

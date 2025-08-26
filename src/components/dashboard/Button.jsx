import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ link, text, icon, func, id, type }) => {
	if (type) {
		return (
			<button
				type="submit"
				className="bg-orange-900 text-white text-xl font-normal px-3 py-2 rounded-xl hover:scale-105 transition-all shadow-2xl"
			>
				{text}
			</button>
		);

		console.log("submit");
	}
	if (icon)
		return (
			<Link to={link}>
				<div
					className="flex justify-center items-center rounded-full w-10 h-10 hover:bg-neutral-300 transition-all"
					onClick={() => {
						if (!func) return;
						func();
						console.log("first");
					}}
				>
					<FontAwesomeIcon icon={`fa-solid ${icon}`} />
				</div>
			</Link>
		);
	return (
		<Link to={link}>
			<div
				className="bg-orange-900 text-white text-xl font-normal px-3 py-2 rounded-xl hover:scale-105 transition-all shadow-2xl "
				onClick={() => {
					if (!func) return;
					func(id);
				}}
			>
				{text}
			</div>
		</Link>
	);
};

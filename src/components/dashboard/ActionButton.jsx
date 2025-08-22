import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ActionCard = ({ text, link }) => {
	const navigate = useNavigate();
	return (
		<div
			className="action__card"
			onClick={() => {
				navigate(link);
			}}
		>
			<h1>{text}</h1>
		</div>
	);
};

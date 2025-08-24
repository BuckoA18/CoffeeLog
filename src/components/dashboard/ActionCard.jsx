import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ActionCard = ({ text, link }) => {
	const navigate = useNavigate();
	return (
		<div
			className="flex justify-center items-center  bg-white rounded-xl h-30 hover:cursor-pointer hover:h-35 transition-all"
			onClick={() => {
				navigate(link);
			}}
		>
			<h1 className="text-xl font-bold">{text}</h1>
		</div>
	);
};

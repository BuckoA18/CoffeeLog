import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ActionCard = ({ text, link }) => {
	const navigate = useNavigate();
	return (
		<div
			className="flex justify-center items-center mt-10 w-full bg-white rounded-xl h-25 hover:cursor-pointer"
			onClick={() => {
				navigate(link);
			}}
		>
			<h1>{text}</h1>
		</div>
	);
};

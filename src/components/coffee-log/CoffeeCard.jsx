import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../dashboard/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Recipes } from "../recipe/Recipes";

export const CoffeeCard = ({ coffeeInfo, onRemove }) => {
	const [isCardOpen, setIsCardOpen] = useState(false);
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;
	const roastColors = {
		light: "bg-orange-300",
		medium: "bg-orange-700",
		dark: "bg-orange-950",
	};
	const roastColor = roastColors[roast_level];

	const handleClick = () => {
		setIsCardOpen((prev) => !prev);
	};

	return (
		<>
			<div
				onClick={handleClick}
				className="flex flex-col bg-neutral-50 rounded-xl p-5 shadow hover:p-10 hover:cursor-pointer transition-all "
			>
				<div className="flex justify-between p-2">
					<div className={`w-5 h-5 rounded-full ${roastColor}`}></div>
					<h1 className="text-xl font-medium">{name}</h1>
					<p>Roasted {roast_date}</p>
					<p>{notes}</p>

					<div className="flex gap-5 justify-center">
						<Button icon="fa-pen" link={`/${id}/edit`} />
						<Button icon="fa-xmark" func={onRemove} id={id} />
					</div>
				</div>
				{isCardOpen && <Recipes coffeeId={id} />}
			</div>
		</>
	);
};

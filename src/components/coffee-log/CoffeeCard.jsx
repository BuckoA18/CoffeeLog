import React, { useState } from "react";
import { Button } from "../dashboard/Button";
import { Recipes } from "../recipe/Recipes";

export const CoffeeCard = ({
	coffeeInfo,
	onRemove,
	recipes,
	setRecipes,
	refetchRecipes,
}) => {
	const [isCardOpen, setIsCardOpen] = useState(false);
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;
	const roastColors = {
		light: "bg-yellow-600",
		medium: "bg-amber-800",
		dark: "bg-orange-950",
	};
	const roastColor = roastColors[roast_level];

	const handleClick = () => {
		setIsCardOpen((prev) => !prev);
	};

	console.log("id: ", id);

	return (
		<>
			<div className="flex flex-col bg-neutral-50 rounded-xl p-5 shadow hover:py-10 transition-all ">
				<div className="flex justify-between items-center p-2">
					<div className={`w-5 h-5 rounded-full ${roastColor}`}></div>
					<h1 className="text-xl font-medium">{name}</h1>
					<p>Roasted {roast_date}</p>
					<p>{notes}</p>

					<div className="flex gap-5 justify-center">
						<Button icon="fa-pen" link={`/${id}/edit`} />
						<Button
							icon="fa-xmark"
							func={() => {
								onRemove(id);
							}}
						/>
						<Button icon="fa-bars" func={handleClick} />
					</div>
				</div>
				<div
					className={`transition-all duration-500 ease-in-out flex flex-col ${
						isCardOpen
							? "max-h-[500px] opacity-100 block"
							: "max-h-0 opacity-0 none"
					}`}
				>
					{isCardOpen && (
						<Recipes
							coffeeId={id}
							recipes={recipes}
							setRecipes={setRecipes}
							refetchRecipes={refetchRecipes}
						/>
					)}
				</div>
			</div>
		</>
	);
};

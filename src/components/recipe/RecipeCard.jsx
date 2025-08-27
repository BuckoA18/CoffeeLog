import React, { useState } from "react";
import { Button } from "../dashboard/Button";

export const RecipeCard = ({ recipeInfo, handleRemove }) => {
	const {
		recipe_method,
		recipe_ratio,
		id: recipeId,
		recipe_steps,
	} = recipeInfo;

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};
	return (
		<>
			<div className="flex justify-between px-10 ">
				<div className="flex gap-5 items-center">
					<h1>Method: {recipe_method}</h1>
					<span>Ratio: {recipe_ratio}</span>
					<p>Instructions</p>
					<Button icon="fa-bars-staggered" func={handleOpen} />
				</div>
				<div className="flex">
					<Button icon="fa-pen" link={`recipe/${recipeId}/edit`} />
					<Button
						icon="fa-xmark"
						func={() => {
							handleRemove(recipeId);
						}}
					/>
				</div>
			</div>
			<ul className={`${isOpen ? "block" : "hidden"} px-20`}>
				{recipe_steps.map((step) => (
					<li key={step.step} className="list-decimal">
						{step.instruction}
					</li>
				))}
			</ul>
		</>
	);
};

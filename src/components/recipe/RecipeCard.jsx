import React, { useState } from "react";
import { Button } from "../dashboard/Button";

export const RecipeCard = ({ recipeInfo, handleDelete }) => {
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
		<div className="shadow rounded-xl py-5 hover:bg-neutral-100">
			<div className="flex flex-col px-10 sm:flex-row sm:justify-between ">
				<div className="flex flex-col items-center sm:flex-row sm:gap-10 ">
					<h1>Method: {recipe_method}</h1>
					<span>Ratio: {recipe_ratio}</span>
					<p>Instructions</p>
					<Button icon="fa-bars-staggered" func={handleOpen} />
				</div>
				<div className="flex flex-col items-center sm:flex-row">
					<ul
						className={`${isOpen ? "flex" : "hidden"} flex-col px-20 sm:hidden`}
					>
						{recipe_steps.map((step) => (
							<li key={step.step} className="list-decimal">
								{step.instruction}
							</li>
						))}
					</ul>

					<div className="flex">
						<Button icon="fa-pen" link={`recipe/${recipeId}/edit`} />
						<Button
							icon="fa-xmark"
							func={() => {
								handleDelete(recipeId);
							}}
						/>
					</div>
				</div>
			</div>
			<div className="hidden sm:block">
				<ul className={`${isOpen ? "flex" : "hidden"}  flex-col px-20`}>
					{recipe_steps.map((step) => (
						<li key={step.step} className="list-decimal">
							{step.instruction}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

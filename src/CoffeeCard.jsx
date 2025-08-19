import React from "react";
import { Link } from "react-router-dom";
import { EditLog } from "./EditLog";

export const CoffeeCard = ({ coffeeInfo, edit, remove }) => {
	const { name, roast_level, roast_date, notes, id } = coffeeInfo;
	return (
		<ul>
			<li>
				{name} || {roast_level} || {roast_date} || {notes}
				<Link to={`editlog/${id}`}>
					<button>Edit</button>
				</Link>
				<button
					onClick={() => {
						remove(id);
					}}
				>
					Delete
				</button>
			</li>
		</ul>
	);
};

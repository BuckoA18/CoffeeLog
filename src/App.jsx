import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NewLog } from "./coffee-components/NewLog";
import { Home } from "./Home";
import { EditLog } from "./coffee-components/EditLog";
import { Recipes } from "./recipe-components/Recipes";
import { NewRecipe } from "./recipe-components/NewRecipe";
import { EditRecipe } from "./recipe-components/EditRecipe";

const App = () => {
	return (
		<BrowserRouter>
			<nav>
				<h1>Log your daily coffee</h1>
				<Link to="/">Home</Link>
				<Link to="newlog">NewLog</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newlog" element={<NewLog />} />
				<Route path="/:id/edit" element={<EditLog />} />
				<Route path="coffee/:id/recipes" element={<Recipes />} />
				<Route
					path="coffee/:id/recipes/:recipeId/edit"
					element={<EditRecipe />}
				/>
				<Route path="coffee/:id/recipes/newrecipe" element={<NewRecipe />} />
			</Routes>
		</BrowserRouter>
	);
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);

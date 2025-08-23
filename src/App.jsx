import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NewLog } from "./components/coffee-log/NewLog";
import { EditLog } from "./components/coffee-log/EditLog";
import { Recipes } from "./components/recipe/Recipes";
import { NewRecipe } from "./components/recipe/NewRecipe";
import { EditRecipe } from "./components/recipe/EditRecipe";
import { Header } from "./components/dashboard/Header";
import { Main } from "./components/dashboard/Main";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
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

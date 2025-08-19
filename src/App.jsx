import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NewLog } from "./NewLog";
import { Home } from "./Home";
import { EditLog } from "./EditLog";

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
				<Route path="/editlog/:id" element={<EditLog />} />
			</Routes>
		</BrowserRouter>
	);
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);

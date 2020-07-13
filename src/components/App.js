import React, { useState } from "react";
import "./App.css";
import WeatherDisplay from "./WeatherDisplay";
import Search from "./Search";
import NavBar from "./NavBar";

const App = () => {
	const [query, setquery] = useState();
	const getQuery = (q) => {
		setquery(q);
	};

	// const [date, setDate] = useState();
	// const getDate = (q) => {
	// 	setDate(q);
	// };

	return (
		<div>
			<NavBar />
			<div className="container mx-auto space-y-8 mt-4 -mb-2">
				<Search
					getQuery={getQuery}
					// date={getDate}
				/>
				<WeatherDisplay query={query} />
			</div>
		</div>
	);
};

export default App;

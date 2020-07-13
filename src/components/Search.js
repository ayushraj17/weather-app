import React, { useState } from "react";
const Search = ({ getQuery }) => {
	const [query, setQuery] = useState("");
	const handleSumbit = (e) => {
		e.preventDefault();
		getQuery(query);
	};
	return (
		<div id="input_container">
			<form onSubmit={(e) => handleSumbit(e)}>
				<input
					type="text"
					id="input"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					placeholder="Enter Your City"
					className="bg-gray-200 w-full  outline-none appearance-none rounded-full  placeholder-gray-600 font-bold text-center pointer-events-reverse uppercase tracking-widest p-3 autofocus"
				/>
				<button className="" type="submit">
					<i
						className="material-icons transition duration-700 ease-in-out transform   hover:scale-125 "
						id="input_img"
					>
						search
					</i>
				</button>
			</form>
		</div>
	);
};

export default Search;

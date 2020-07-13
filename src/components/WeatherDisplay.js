import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherOneDay from "./WeatherOneDay";
// import { Slide, Tada } from "react-awesome-reveal";
// import Slide from "react-reveal/Slide";

import WeatherByHours from "./WeatherByHours";
// import styled, { keyframes } from "styled-components";
// import SlideOutUp from "@bit/formidablelabs.react-animations.slide-out-up";
// const SlideOutUpAnimation = keyframes`${SlideOutUp}`;
// const SlideOutUpDiv = styled.div`
// 	animation: infinite 5s ${SlideOutUpAnimation};
// `;

// const Slide = require("react-reveal/Slide");

const WeatherDisplay = ({ query }) => {
	const API = "3bc7c8b19aee443e88577d2e81b31e0b";
	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);
	// const [fiveDays, setFiveDays] = useState([1, 2, 3, 4, 5, 6]);
	const [date, getDate] = useState("");
	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			// setIsLoading(true);
			const result = await axios(
				`http://api.openweathermap.org/data/2.5/forecast/?q=${query}&units=metric&appid=${API}`
			);

			setData(result.data.list);

			// setIsLoading(!true);
		};
		if (!query) {
			return undefined;
		} else {
			fetchData();
		}
	}, [query]);

	const renderList = () => {
		return data
			.filter((day) => day.dt_txt.endsWith("12:00:00"))
			.map((day) => {
				return (
					<WeatherOneDay
						key={day.main.temp}
						temp={day.main.temp}
						humid={day.main.humidity}
						weather={day.weather.map((day) => day.description)}
						icon={day.weather.map((day) => day.icon)}
						day={day.dt_txt}
						// onClick={() => setFiveDays(day)}
						onWeatherClick={(currentDay) => {
							getDate(currentDay);
							setShow(true);
						}}
						// onWeatherClick={(date) => {
						// 	setFiveDays([]);
						// 	renderDayByHours(date);
						// }}
					/>
				);
			});
	};
	const renderDay = () => {
		return data
			.filter((day) => day.dt_txt.startsWith(date))
			.map((day) => {
				return (
					// <Tada direction="left" cascade="true" damping="5000" delay="500">
					<WeatherByHours
						temp={day.main.temp}
						humid={day.main.humidity}
						weather={day.weather.map((day) => day.description)}
						icon={day.weather.map((day) => day.icon)}
						day={day.dt_txt}
						key={day.main.temp}
					/>
				);
			});
	};

	return (
		<div>
			<div className=" sm:px-4 md:h-56 flex flex-wrap flex-shrink  content-between gap-1 sm:flex-grow md:flex-grow-0 w-full sm:flex-col md:flex-row bg-blue-100  rounded-lg items-center  justify-evenly md:justify-around ">
				{renderList()}
			</div>
			{show && (
				<div class="grid  divide-x my-2 py-2 bg-blue-200 rounded-lg shadow-lg justify-center content-center align-center  divide-blue-400 ">
					<div class="text-center m-auto flex">
						<div className="md:col-span-2 m-auto font-mono md:text-lg font-semibold md:tracking-widest text-gray-700 text-shadow-lg ">
							Hourly forecast for {date.slice(5, 10)}
						</div>
						<div className="text-center m-auto"></div>
					</div>
				</div>
			)}
			{show && renderDay()}
		</div>
	);
};

export default WeatherDisplay;

import React from "react";
// import { ReactComponent as Cloudy } from "../static/cloudy-day-3.svg";
// import { ReactComponent as HeavyRain } from "../static/rainy-7.svg";
// import { ReactComponent as ModRain } from "../static/rainy-5.svg";
// import { ReactComponent as ShowerRain } from "../static/rainy-3.svg";
// import { ReactComponent as Snowy } from "../static/snowy-6.svg";
// import { ReactComponent as Sunny } from "../static/day.svg";
import Bounce from "react-reveal/Bounce";
import { WiThermometer, WiHumidity } from "react-icons/wi";
const WeatherOneDay = ({ weather, temp, humid, day, icon, onWeatherClick }) => {
	// const renderIcons = () => {
	// 	//For selecting appropriate rain icon
	// 	if (weather[0].includes("rain"))
	// 		if (weather[0].includes("heavy"))
	// 			return (
	// 				<HeavyRain className="lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-10 m-auto" />
	// 			);
	// 		else if (weather[0].includes("moderate"))
	// 			return (
	// 				<ModRain className="lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-10 m-auto" />
	// 			);
	// 		else if (weather[0].includes("light"))
	// 			return (
	// 				<ShowerRain className="lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-6 m-auto" />
	// 			);
	// 		else {
	// 			return (
	// 				<ModRain className="lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-10 m-auto" />
	// 			);
	// 		}
	// 	else return
	// };
	return (
		<Bounce>
			<div
				onClick={() => onWeatherClick(day.slice(0, 10))}
				className=" cursor-pointer my-3  md:mx-0 md:my-8 bg-white grid  sm:-mx-12 md:gap-0 md:grid-cols-2 lg:h-40 lg:w-40 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg rounded-lg"
			>
				<div className="md:col-span-2 m-auto font-mono md:text-lg font-semibold md:tracking-widest text-gray-600 text-shadow-lg ">
					{day.slice(5, 11)}
				</div>
				<div className=" cursor-pointer md:col-span-2 m-auto flex items-center justify-center content-center">
					{/* lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-6 */}
					<img
						className=" w-16 h-16 -ml-1 -mr-1 lg:h-32  lg:w-32 lg:-mb-6 lg:-mt-6  m-auto "
						src={`http://openweathermap.org/img/wn/${icon[0]}@2x.png`}
						alt={weather[0]}
					/>
				</div>
				<div className=" md:col-span-1 text-gray-700  md:m-auto flex align-baseline items-center">
					<WiThermometer size="1.8rem" className="-mx-1" />
					{`${temp.toFixed(0)}°C`}
				</div>
				<div className=" md:col-span-1 text-gray-600 md:m-auto sm:mb-1 flex flex-start align-baseline float-left items-center">
					<WiHumidity size="1.8rem" className="-mx-1" />
					{humid}
				</div>
			</div>
		</Bounce>
	);
};

export default WeatherOneDay;

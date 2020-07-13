import React from "react";
import { WiThermometer, WiHumidity } from "react-icons/wi";
import { Slide } from "react-awesome-reveal";

const WeatherByHours = ({ temp, humid, weather, icon, day }) => {
	return (
		<Slide
			direction="top"
			cascade="true"
			damping="5000"
			duration="1000"
			delay="500"
		>
			<div>
				{" "}
				<div class="grid grid-cols-4 h-6 divide-x my-2 py-2 bg-blue-200 rounded-lg shadow-lg justify-center content-center align-center  divide-white-400">
					<div class="text-center my-auto"> {day.slice(11, 16)}</div>

					<div class="text-center flex align-baseline items-center justify-center my-auto">
						<WiThermometer size="1.8rem" className="-mx-1" />
						{`${temp.toFixed(0)}°C`}
					</div>
					<div class="text-center flex align-baseline items-center justify-center my-auto">
						<WiHumidity size="1.8rem" className="-mx-1" />
						{humid}
					</div>
					<div class="text-center my-auto ">
						<img
							// className="object-contain  -my-8 p-2  mx-auto"
							className="w-12 h-12 mx-auto -my-3"
							src={`http://openweathermap.org/img/wn/${icon[0]}@2x.png`}
							alt={weather[0]}
						/>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default WeatherByHours;

import React from "react";

const Weather = (props) => (
    <div>
        {props.city && props.country && <h2>Location: {props.city}, {props.country}</h2>}
        {props.temperature && <h2>Current Temp: {props.temperature}&deg;F</h2>}
        {props.temp_high && <h2>High: {props.temp_high}&deg;F</h2>}
        {props.temp_low && <h2>Low: {props.temp_low}&deg;F</h2>}
        {props.humidity && <h2>Humidity: {props.humidity}%</h2>}
        {props.description && <h2>Currently: {props.description}</h2>}
        {props.error && <h2>Error: {props.error}</h2>}
    </div>
);

export default Weather;
import React, { useContext } from "react";
import { context } from "./context";
import Clock from "react-live-clock";
import Card from "./Card";

const Weather = () => {
  const { theme, weather, location, timezone } = useContext(context);
  const getTime = (date, timezone) => {
    return new Date(date * 1000).toLocaleString("en-GB", {
      timeZone: timezone,
      hour: "numeric",
      minute: "numeric",
    });
  };
  return (
    weather &&
    timezone && (
      <Card className={theme + " weather"}>
        <div>
          <h1>
            {location.city}, {location.country}
          </h1>
        </div>
        <div className="clocks">
          <Clock format={"DD MMMM YYYY"} ticking={true} timezone={timezone} />
          <br />
          <Clock
            className="time"
            format={"HH:mm:ss"}
            ticking={true}
            timezone={timezone}
          />
        </div>
        <h3>
          <i>{weather.weatherc.main}</i>
        </h3>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weatherc.icon}@2x.png`}
          />
          <b>
            <i>{parseInt(weather.temp).toFixed(1)}&deg; C&emsp;&emsp;</i>
          </b>
          <i>feels like {parseInt(weather.feels_like).toFixed(1)}&deg; C</i>
          <ul>
            <li>
              <i>
                {parseInt(weather.temp_max).toFixed(1)}&nbsp;/&nbsp;
                {parseInt(weather.temp_min).toFixed(1)}
              </i>
            </li>
            <li>
              <i>Sunrise: &nbsp;{getTime(weather.sunrise, timezone)}</i>
            </li>
            <li>
              <i>Sunset: &nbsp;{getTime(weather.sunset, timezone)}</i>
            </li>
            <li>
              <i>Wind: &nbsp;{parseInt(weather.wind).toFixed(1)} km/h</i>
            </li>
            {/* <li>
              <i>Pressure: {weather.pressure}</i>
            </li> */}
            <li>
              <i>Humidity: &nbsp;{weather.humidity} %</i>
            </li>
          </ul>
        </div>
      </Card>
    )
  );
};

export default Weather;

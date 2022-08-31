import React, { useState } from "react";
import Card from "./Card";
import Forecast from "./Forecast";
import Temp from "./Temp";

const Weather = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState([]);
  const [city, setCity] = useState("");
  const [date, setDate] = useState([]);

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setWeather(parsedData.weather);
    setMain(parsedData);

  };

  const getDate = async () => {
    const foreURl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    let foreData = await fetch(foreURl);
    let parsedForeData = await foreData.json();

    const daysArray = [];
    const time = new Date().getHours();
    parsedForeData.list.forEach(function (single) {
      var textHour = single.dt_txt.substring(11, 13);
      var numberHour = parseInt(textHour, 10);
      var difference = Math.abs(time - numberHour);

      if (
        difference === 1 ||
        difference === 0 ||
        (time === 23 && numberHour === 21) ||
        (time === 24 && numberHour === 0) ||
        (time === 2 && numberHour === 0)
      ) {
        daysArray.push(single);
      }
    });
    setDate(daysArray);
  };

  return (
    <>
      <div className="container search">
        <input
          className="searchBar capitalize"
          type="text"
          placeholder="Search weather by city name"
          name="cityName"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          
          }}
        />

        <button
          className="searchBtn"
          onClick={() => {
            getWeather();
            getDate();
            document.getElementById("forecastHead").style.visibility="visible";
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {city === "" ? (
        <div
          className="container precard"
       
        >
          <h5 className="pre">
            Enter your city name above to get the weather details.
          </h5>
        </div>
      ) : (
        <div className="container temperature card">
          {[].concat(main).map((e) => {
            return (
              <Temp
                key={e.sys.id}
                temp={e.main.temp}
                humidity={e.main.humidity}
                windSpeed={e.wind.speed}
                name={e.name}
             
              />
            );
          })}
          {weather.map((element) => {
            return (
              <Card
                key={element.id}
                title={element.main}
                image={element.icon}
                description={element.description}
              />
            );
          })}
        </div>
      )}
      <h1 style={{fontFamily: "Aboreto, cursive",textDecoration:"underline", textAlign:"center",marginTop:"2rem", visibility:"hidden"}} id="forecastHead">Weather Forecast:</h1>
      <div className="container temperature card">
        {date.map((element) => {
          return (
            <Forecast
              key={element.dt}
              title={element.weather[0].main}
              description={element.weather[0].description}
              foreTemperature={element.main.temp}
              date={element.dt_txt}
              imageIcon={element.weather[0].icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default Weather;

import React, { useState, useEffect } from 'react';
import MyTownImage from './assets/MyTown1.png';
import coldImage from './assets/cold.png';
import mildImage from './assets/mild.png';
import sunnyImage from './assets/sunny.png';

const MyTown = () => {
  const [temperature, setTemperature] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  // Fetch temperature data from OpenWeatherMap API
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const apiKey = 'c35ef1fab881d602dd79d7cb994146af';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=${apiKey}`);
        const data = await response.json();
        setTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
  }, []);

  // Convert Celsius to Fahrenheit
  const convertTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  const displayTemperature = isCelsius ? Math.floor(temperature) : (Math.floor(temperature) * 9 / 5) + 32;
  const temperatureUnit = isCelsius ? '°C' : '°F';

  // Determine image based on temperature
  const getTemperatureImage = () => {
    if (temperature <= 10) return coldImage;
    if (temperature > 10 && temperature < 20) return mildImage;
    return sunnyImage;
  };

  return (
    <div className="card">
      <img
        src={MyTownImage}
        alt="Halifax, NS"
        className="MyTownimage"
      />
      <h1>I live in Halifax, NS</h1>

      <p><br />Halifax is a city situated on the East Coast of Canada in the Maritime province of Nova Scotia.</p>

      <div className="weather">
      {temperature !== null && <img src={getTemperatureImage()} alt="Temperature Condition" className="temp-image" />}
        <span className='temp'>
          {displayTemperature !== null ? displayTemperature : 'Loading...'} 
        </span>
        <span className='tempunit'>
          {temperatureUnit}
        </span>
      </div>

      <button className='convertbutton' onClick={convertTemperature}>
        {isCelsius ? 'Convert to °F' : 'Convert to °C'}
      </button>
    </div>
  );
};

export default MyTown;

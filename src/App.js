import React, { useState } from 'react';
import { useGetWeatherByCityQuery } from './weatherApiSlice';
import './App.css'; // Import your CSS file here

const App = () => {
  const [city, setCity] = useState('');
  const [cityName, setCityName] = useState('');

  const { data: weatherData, error, isLoading } = useGetWeatherByCityQuery(cityName, {
    skip: !cityName, // Skip the query until cityName is set
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(city); // Trigger the query with the city input
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error.error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;

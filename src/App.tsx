import type React from "react";
import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

interface Weather {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon?: string;
  city?: string;
}

const App = () => {
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(weather);

  // !the fetching part
  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      console.log(data);
      setWeather({
        temp: data.main.temp - 273.15,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name,
      });
    } catch (error) {
      setError((error as Error).message);
      console.error(error);
    } finally {
      setLoading(false);
      setCity("");
    }
  };
  useEffect(() => {
    fetchWeather("Addis Ababa");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center">
      {weather ? (
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden ">
          <div className="bg-blue-500 text-white h-16 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Weather App</h1>
          </div>
          <div className="px-4 py-8">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter city name"
                  value={city || ""}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Search"}
                </button>
              </div>
            </form>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* <WeatherCard icon="default-icon" title="test" value="15" /> */}
            {weather && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <WeatherCard weather={weather} />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 space-y-4 animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>{" "}
          {/* Title placeholder */}
          <div className="h-8 bg-gray-300 rounded w-full"></div>{" "}
          {/* Input placeholder */}
          <div className="h-10 bg-blue-300 rounded w-1/4"></div>{" "}
          {/* Button placeholder */}
          <div className="h-48 bg-gray-200 rounded"></div>{" "}
          {/* Weather card skeleton */}
        </div>
      )}
    </div>
  );
};

export default App;

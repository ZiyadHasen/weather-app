import React from "react";

interface Weather {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon?: string;
  city?: string;
}

function WeatherCard({ weather }: { weather: Weather }) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Main Weather Display */}
      <div className="bg-white rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          {weather.city && (
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              {weather.city}
            </h2>
          )}
          {weather.icon ? (
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="Weather condition"
              className="w-16 h-16"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          )}
          <div className="text-left">
            <p className="text-2xl font-bold text-gray-800">
              {weather.temp.toFixed(1)}°C
            </p>
            <p className="text-xl text-gray-600 capitalize">
              {weather.description}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Weather Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Temperature Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Temperature</p>
              <p className="text-xl font-semibold">
                {weather.temp.toFixed(1)}°C
              </p>
            </div>
          </div>
        </div>

        {/* Humidity Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Humidity</p>
              <p className="text-xl font-semibold">{weather.humidity}%</p>
            </div>
          </div>
        </div>

        {/* Wind Speed Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Wind Speed</p>
              <p className="text-xl font-semibold">{weather.windSpeed} m/s</p>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Description</p>
              <p className="text-xl font-semibold capitalize">
                {weather.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

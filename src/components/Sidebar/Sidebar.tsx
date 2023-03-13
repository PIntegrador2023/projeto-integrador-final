import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Sidebar.css";

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Loading: React.FC = () => {
  return <div>Loading...</div>;
};

const Sidebar: React.FC = () => {
  const [cidade, setCidade] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=faa7a025f87a4febac1212103231402&q=${latitude},${longitude}&lang=pt`
        );
        const data = await response.json();
        setWeatherData(data);
        setIsLoading(false);
      });
    };

    if (!cidade) {
      fetchData();
    }
  }, [cidade]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=faa7a025f87a4febac1212103231402&q=${cidade}&lang=pt`
    );
    const data = await response.json();
    setWeatherData(data);
    setIsLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(event.target.value);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={cidade}
            placeholder="Digite o nome da cidade"
            onChange={handleInputChange}
          />
        </div>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        weatherData && (
          <div className="wheather">
            <h2>{weatherData.location.name},</h2>
            <h2>{weatherData.location.country}</h2>
            <h4>{weatherData.current.temp_c}&deg;C</h4>
            <img src={weatherData.current.condition.icon} alt="" />
            <p>{weatherData.current.condition.text}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Sidebar;

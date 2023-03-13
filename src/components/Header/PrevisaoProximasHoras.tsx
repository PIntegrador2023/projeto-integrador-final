import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import moment from "moment";

type WeatherData = {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};

type ForecastData = {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};

export const PrevisaoProximasHoras = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json?key=faa7a025f87a4febac1212103231402&q=São+Paulo&days=1&lang=pt"
      );
      setWeatherData(response.data.current);
      setForecastData(response.data.forecast.forecastday[0].hour.slice(0, 24));
    };
    fetchData();

    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000 * 60 * 60); // atualiza a cada hora
    return () => clearInterval(intervalId);
  }, []);

  const renderForecast = () => {
    const forecastForNext3Hours = forecastData.filter((data) => {
      const forecastTime = moment(data.time, "YYYY-MM-DD HH:mm");
      return (
        forecastTime.isAfter(currentTime) &&
        forecastTime.isBefore(currentTime.clone().add(3, "hours"))
      );
    });

    return forecastForNext3Hours.map((data) => {
      const time = moment(data.time, "YYYY-MM-DD HH:mm").format("HH:mm");

      return (
        <div key={data.time} className="previsao-box">
          <h3>{time}</h3>

          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "32px", height: "32px" }}
              src={data.condition.icon}
              alt={data.condition.text}
            />
            <p className="temperatura">{data.temp_c}°C </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="previsao">
      <div className="titulo-previsao">
        <h2>
          Previsão do tempo <br /> hora em hora
        </h2>
      </div>
      <div className="previsao-resultado">
        {forecastData.length > 0 && <div>{renderForecast()}</div>}
      </div>
    </div>
  );
};

//O forecastData possui 24 horas de previsão, pois estamos buscando mais horas de previsão.
//Alteramos o intervalo de atualização para a cada hora (60 minutos * 60 segundos).
//No método renderForecast, filtramos os dados da previsão para as próximas 3 horas a partir do tempo atual (currentTime).
//Alteramos a exibição da hora da previsão para exibir apenas a hora e o minuto (HH:mm) em vez da hora, minuto e segundo.

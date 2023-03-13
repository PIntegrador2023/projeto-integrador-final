import React, { useState, useEffect } from "react";
import axios from "axios";
import "./stylesQuality.css";
type AirQualityProps = {};

type AirQualityData = {
  co: number;
  o3: number;
  no2: number;
  so2: number;
};
// co o3 no2 so2
const AirQuality: React.FC<AirQualityProps> = () => {
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(
    null
  );

  const getCurrentPosition = () =>
    new Promise<GeolocationPosition>((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

  useEffect(() => {
    const api_key = "5aefafcf98853c1321595024e2906c50";
    const getAirQualityData = async () => {
      try {
        const { coords } = await getCurrentPosition();
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.latitude}&lon=${coords.longitude}&appid=${api_key}`
        );
        console.log(data.list[0].components.co);
        const Co = data.list[0].components.co;
        const O3 = data.list[0].components.o3;
        const No2 = data.list[0].components.no2;
        const So2 = data.list[0].components.no2;
        setAirQualityData({ co: Co, o3: O3, no2: No2, so2: So2 });
        console.log(data.city);
      } catch (error) {
        console.error(error);
      }
    };

    getAirQualityData();
  }, []);

  if (!airQualityData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="box">
      <div className="box-air-quality">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/qualidade-ar.png?alt=media&token=93eb79db-e811-4fae-af75-6249b2d6efb2"
          alt=""
        />
      </div>
      <h3 className="titulo-ar">Um bom dia para Caminhar</h3>
      <div className="box-air-info">
        <span className="info1">
          <p>CO</p>
          <p>{Math.round(airQualityData.co)}</p>
        </span>
        <span className="info2">
          <p>O3</p>
          <p>{Math.round(airQualityData.o3)}</p>
        </span>
        <span className="info3">
          <p>No2</p>
          <p>{airQualityData.no2}</p>
        </span>
        <span className="info4">
          <p>So2</p>
          <p>{airQualityData.so2}</p>
        </span>
      </div>
    </div>
  );
};

export default AirQuality;

//{airQualityData.o3}

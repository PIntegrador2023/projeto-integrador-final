import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

type UvContextProviderProps = {
  children: React.ReactNode;
};

interface UvdataContext {
  fetchData: () => void;
  uvIndexData: number | string;
  location: {
    latitude: number;
    longitude: number;
  };
}

const UvIndexContext = createContext({} as UvdataContext);

export const useUvIndexContext = () => {
  return useContext(UvIndexContext);
};

export const UvIndexProvider = ({ children }: UvContextProviderProps) => {
  const [uvIndexData, setUvIndexData] = useState("");
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      } catch (err) {
        console.log("Error fetching location: ", err);
      }
    };

    fetchLocation();
  }, []);

  const fetchData = async () => {
    const api_key = "faa7a025f87a4febac1212103231402";
    const now = new Date();
    const HoraAtual = now.toISOString().split(".")[0] + "Z";
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location.longitude},${location.latitude}&dt=${HoraAtual}&aqi=yes`
      );
      const uvIndex = response.data.forecast.forecastday[0].hour[0].uv;
      setUvIndexData(uvIndex);
    } catch (error) {
      console.log(`Ocorreu um erro: ${error}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(uvIndexData);
  return (
    <UvIndexContext.Provider
      value={{
        fetchData,
        uvIndexData,
        location
      }}
    >
      {children}
    </UvIndexContext.Provider>
  );
};

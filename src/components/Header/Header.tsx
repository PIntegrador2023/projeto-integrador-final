import React, { useState, useEffect } from "react";
import { PrevisaoProximasHoras } from "./PrevisaoProximasHoras";
import "./header.css";

export const Header = () => {
  const [time, setTime] = useState<string>("");
  const [saudacao, setSaudacao] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      const currentDateTime = currentDate.toLocaleString("pt-BR", options);
      const currentHour = currentDate.getHours();
      setTime(currentDateTime);

      if (currentHour >= 6 && currentHour < 12) {
        setSaudacao("Bom dia!");
      } else if (currentHour >= 12 && currentHour < 18) {
        setSaudacao("Boa tarde!");
      } else {
        setSaudacao("Boa noite!");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="saudacao">
        <h1>
          {saudacao} <br /> {time}
        </h1>
      </div>
      <div>
        <PrevisaoProximasHoras />
      </div>
    </div>
  );
};

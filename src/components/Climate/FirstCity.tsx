import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

const cidades = [
  /*Objeto cidades*/
  {
    nome: "São Paulo",
    apiKey: "5aefafcf98853c1321595024e2906c50"
  },
  {
    nome: "Porto Alegre",
    apiKey: "5aefafcf98853c1321595024e2906c50"
  },
  {
    nome: "Fortaleza",
    apiKey: "5aefafcf98853c1321595024e2906c50"
  }
];
interface PrevisaoTempoData {
  main: {
    temp: number;
  };
  name: string;
  weather: {
    description: string;
  }[];
}
const PrevisaoTempo = () => {
  /*Função Previsão do Tempo e hook useState*/

  const [tempos, setTempos] = useState<PrevisaoTempoData[]>([]);

  const buscarDadosTempo = async () => {
    /*Função de buscar dados da API */
    try {
      const resultados = await Promise.all(
        cidades.map(async (cidade) => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.nome}&units=metric&lang=pt&appid=${cidade.apiKey}`;
          const resposta = await axios.get(url);
          return resposta.data;
        })
      );
      setTempos(resultados);
    } catch (erro) {
      console.error(erro);
    }
  };

  useEffect(() => {
    /*Faz requisição nos servidores da API */
    buscarDadosTempo();
  }, []);

  return (
    /*Classe de containers para mostrar informações na tela */
    <div className="container">
      {tempos.map((tempo, index) => (
        <div key={index} className="weather-info ">
          <div className="square">
            <div className="weather-icon-container">
              <div className="weather-icon-info">
                <span className="temperature" style={{ color: "white" }}>
                  {Math.round(tempo.main.temp)}°
                </span>
                <h4>{tempo.name}</h4>
                <h4>{tempo.weather[0].description}</h4>
              </div>
              <div>
                <img
                  src={`https://cdn-icons-png.flaticon.com/512/1146/1146869.png`}
                  alt="Ícone do tempo"
                  className="weather-icon"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrevisaoTempo;

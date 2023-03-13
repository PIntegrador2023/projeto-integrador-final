import React, { useState, useEffect } from "react";
import "./styles.css";
import { useUvIndexContext } from "./UvContext";
interface MostrarResultadoFinalProps {
  className?: string;
}
export const UvIndexComponent = () => {
  const { fetchData, uvIndexData } = useUvIndexContext();
  const [uvLevel, setUvLevel] = useState("uv-low");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Função para buscar o tamanho da janela
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Atualizar o tamanho da janela ao redimensionar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Executar a função fetchData ao carregar o componente
  useEffect(() => {
    fetchData();
  }, []);

  // Função para mostrar o resultado
  const MostrarResultadoFinal: React.FC<MostrarResultadoFinalProps> = ({ className }) => {
    const uv = uvIndexData;
    if (uv <= 3) {
      return (
        <>
          <img
            className="uv-low"
            src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-baixo.png?alt=media&token=a6c37c04-fada-4e7b-aa46-be96fbf7e62e"
            alt=""
          />
          {windowWidth < 768 ? (
            <>
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          ) : (
            <>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          )}
        </>
      );
    } else if (uv > 3 && uv < 4) {
      return (
        <>
          {windowWidth < 768 ? (
            <>
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-baixo.png?alt=media&token=a6c37c04-fada-4e7b-aa46-be96fbf7e62e"
                alt=""
              />
              <img
                className="uv-medium"
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          ) : (
            <>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-baixo.png?alt=media&token=a6c37c04-fada-4e7b-aa46-be96fbf7e62e"
                alt=""
              />
              <img
                className="uv-medium"
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {windowWidth < 768 ? (
            <>
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-baixo.png?alt=media&token=a6c37c04-fada-4e7b-aa46-be96fbf7e62e"
                alt=""
              />
              <img
                style={{ display: "none" }}
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                className="uv-high"
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          ) : (
            <>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-baixo.png?alt=media&token=a6c37c04-fada-4e7b-aa46-be96fbf7e62e"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-medio.png?alt=media&token=60aabd94-ebf5-4c80-936e-7578fc5ebbdc"
                alt=""
              />
              <img
                className="uv-high"
                src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/uv-alto.png?alt=media&token=f6885173-3c72-4475-9666-2f234b3da510"
                alt=""
              />
            </>
          )}
        </>
      );
    }
  };

  return (
    <>
      <div className="box">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/BUTTON.png?alt=media&token=cc14cd27-dca0-4dbe-a6eb-5ee3b673fb5b"
          alt=""
        />
        <div>
          <MostrarResultadoFinal className={`uv-selecionado ${uvLevel}`} />
        </div>
      </div>
    </>
  );
};

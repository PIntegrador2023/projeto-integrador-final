import { Route, Routes } from "react-router-dom";
import { DefaultRouter } from "./defaultRouter";
import { EsportesPage } from "../components/esportes/Esportes";
import HomePage from "../components/HomePage/HomePage";



export const RouterApp = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
      <Route path="/" element={<DefaultRouter />}>
        <Route path="/Esportes" element={<EsportesPage />}></Route>
      </Route>
    </Routes>
  );
};
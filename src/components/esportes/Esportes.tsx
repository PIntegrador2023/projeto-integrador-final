import React, { ChangeEvent, useEffect, useState } from "react";
import ImgMediaCard, { ICardProps } from "./Cards/Card";
import axios from "axios";
import { Grid, TextField, Box } from "@mui/material";
import ReactPaginate from "react-paginate";
import "./esportesStyle.css";
export const EsportesPage = () => {
  const [data, setData] = useState<ICardProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const getDataToApi = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbxxiXGVyeTLU_FizA4E-g4aEcEe5Qd5phd661YzqWl-SUG7-5cCerGzRpBvL4ptan5HYA/exec"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar dados da API:", error);
      }
    };
    getDataToApi();
  }, []);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const [search, setNewSearch] = useState("");
  const filtered = !search
    ? currentPageData
    : currentPageData.filter((item) =>
        item.nome_esporte.toLowerCase().includes(search.toLowerCase())
      );
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSearch(e.target.value);
  };

  return (
    <Box className="containerSport">
      <TextField
        variant="standard"
        type="text"
        placeholder="procure por seu esporte"
        value={search}
        onChange={handleSearchChange}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          paddingLeft: 2,
          paddingRight: 2,
          width: "100%",
          color: "#fff",
          "& .MuiInputBase-input": {
            paddingLeft: 2,
            borderBottom: "none !important",
            paddingTop: 1, // Ajusta o padding superior
            paddingBottom: 1, // Ajusta o padding inferior
          },
          "& .MuiSvgIcon-root": {
            color: "rgba(255, 255, 255, 0.7)",
          },
          "& .MuiInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .Mui-focused": {
            // Remove o estilo de foco que pode causar um fundo diferente
            backgroundColor: "transparent",
          },
          marginTop: 2,
        }}
      />

      <Grid container spacing={2}>
        {filtered.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ImgMediaCard
              nome_esporte={item.nome_esporte}
              descricao_esporte={item.descricao_esporte}
              cidades_to_praticar={item.cidades_to_praticar}
              dicas_sites_1={item.dicas_sites_1}
              avatar_url={item.avatar_url}
            />
          </Grid>
        ))}
      </Grid>
      <ReactPaginate
        previousLabel={"< anterior"}
        nextLabel={"próximo >"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </Box>
  );
};

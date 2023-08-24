import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface ICardProps {
  nome_esporte: string;
  descricao_esporte: string;
  cidades_to_praticar: string;
  dicas_sites_1: string;
  avatar_url: string;
}

export default function ImgMediaCard({
  nome_esporte,
  descricao_esporte,
  cidades_to_praticar,
  dicas_sites_1,
  avatar_url,
}: ICardProps) {
  return (
    <Card
    sx={{
        width: 345,
        height: 400, // altura fixa
        overflow: 'hidden', // cortar o conteúdo que excede a altura definida
        backgroundColor: "rgba(255, 255, 255, 0.1)", // fundo semi-transparente
        backdropFilter: "blur(10px)", // efeito de desfoque no fundo (isso dará um efeito de vidro fosco)
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // sombra suave
        marginTop:'16px'
      }}
    >
      <CardMedia component="img" alt={nome_esporte} height="140" image={avatar_url} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#fff" }}
        >
          {nome_esporte}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          {descricao_esporte}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)",mt:'10px' }}>
         Local para a prática: {cidades_to_praticar}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
           
            color: "#fff",
            "&:hover": {
              backgroundColor: "#301276",
            },
          }}
          href={dicas_sites_1}
        >
          Saiba mais
        </Button>
      </CardActions>
    </Card>
  );
}

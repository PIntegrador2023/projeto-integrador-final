import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Drawer,
  useTheme,
  useMediaQuery,
  ListItemButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./topbarstyle.css";
export const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderMenu = () => (
    <List sx={{ display: "flex" }}>
      <ListItemButton component={NavLink} to="/">
        Previsão do tempo
      </ListItemButton>
      <ListItemButton component={NavLink} to="/Esportes">
        Página de Esportes
      </ListItemButton>
      <ListItemButton>Sobre nós</ListItemButton>
    </List>
  );

  return (
    <>
      <AppBar position="static" className="NavbarContainer">
        <Toolbar className="NavbarContent">
          <Box
            sx={{
              gap: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/_nbfvpNcWFJXKGg8t4PNgLqi5yW7vMOOF1YgeIvGFvMPtc3lJeOIl-5DJKzpJovNNmo"
              alt=""
              style={{ maxWidth: "50px", borderRadius: "40px" }}
            />
            <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>
              WeatherApp
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleMenu}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleMenu}
                PaperProps={{ // Adicione esta propriedade para estilizar o <Paper> interno
                  sx: {
                    background: "linear-gradient(360deg, #262c51 0%, #3e3f74 100%)",
                    height:'20%'
                  }
                }}
                sx={{
                  zIndex: "10000",
                  boxShadow: "0px 4px 4px #7582f4",
                  marginTop: '72px', // Para que não cubra sua Navbar
                  paddingTop: '16px'
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "12px",
                  }}
                >
                  <ListItemButton
                    component={NavLink}
                    to="/"
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "500",
                      textDecoration: "none",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "rgba(117, 130, 244, 0.1)", // Um leve fundo quando o item for focado/hovered
                      },
                    }}
                  >
                    Previsão do tempo
                  </ListItemButton>
                  <ListItemButton
                    component={NavLink}
                    to="/Esportes"
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "500",
                      textDecoration: "none",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "rgba(117, 130, 244, 0.1)",
                      },
                    }}
                  >
                    Página de Esportes
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                      fontWeight: "500",
                      padding: "12px 24px",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "rgba(117, 130, 244, 0.1)",
                      },
                    }}
                  >
                    Sobre nós
                  </ListItemButton>
                </List>
              </Drawer>
            </>
          ) : (
            renderMenu()
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

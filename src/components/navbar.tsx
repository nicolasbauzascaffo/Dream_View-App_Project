import * as React from "react";
import "../styles/navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import vector from "../images/Vector.png";
import movie_ticket from "../images/Movie Ticket.png";
import { Link } from "react-router-dom";

const pages = ["Destacadas", "Cartelera", "Reseñas"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="navbar"
      position="fixed"
      sx={{ backgroundColor: "#1c1c1c" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <img className="app_icon" src={vector} alt="vector_app" />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <img
              onClick={handleOpenNavMenu}
              className="movie_ticket_icon"
              src={movie_ticket}
              alt="movie_ticket"
            />

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <button className="navbar-btn">Destacadas</button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="cartelera">
              <button className="navbar-btn">Cartelera</button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="reseña">
              <button className="navbar-btn reseña-btn">Reseñas</button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BluetoothDriveIcon from "@mui/icons-material/BluetoothDrive";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import useAuthContext from "../../context/LoginContext";
import { supabase } from "../../supabase/client";

const pagesAdmin = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Vehículos",
    path: "/admin/vehiculos",
  },
  {
    name: "Marcas",
    path: "/admin/marcas",
  },
  {
    name: "Perfil",
    path: "/admin",
  },
];

const pagesUsuario = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Perfil",
    path: "/admin",
  },
  {
    name: "Acerca de",
    path: "/acerca-de",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
  {
    name: "Vehículos",
    path: "/admin/vehiculos",
  },
];
const rol = "admin";
const pages = rol === "admin" ? pagesAdmin : pagesUsuario;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuthContext();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleToggleAuth = () => {
    if (!isAuth) {
      navigate("/login");
    } else {
      supabase.auth.signOut();
      setIsAuth(false);
      localStorage.removeItem("sb-zqntnjnwhjchamppgacx-auth-token");
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#fff", boxShadow: "0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BluetoothDriveIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>FIVER</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                <Link
                  to={page.path}
                  className="boton"
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  style={{ margin: 2, color: "#000", display: "block" }}
                >
                  {page.name}
                </Link>
              ))}
            </Menu>
          </Box>

          <BluetoothDriveIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>FIVER</Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.path}
                className="boton"
                key={page.path}
                onClick={handleCloseNavMenu}
                style={{ margin: 2, color: "#000", display: "block" }}
              >
                {page.name}
              </Link>
            ))}
          </Box>

          <Grid item>
            <Stack direction="row" spacing={1}>
              <Button variant="contained" onClick={handleToggleAuth}>
                {isAuth ? "Cerrar sesión" : "Iniciar sesión"}
              </Button>
            </Stack>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

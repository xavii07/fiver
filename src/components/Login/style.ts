import { Grid, styled } from "@mui/material";

export const Gridd = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    height: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row-reverse",
    height: "65%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "90%",
  },
}));

export const Imagen = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "60%",
    display: "block",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
}));

export const Titulo = styled("h4")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    margin: "0",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    margin: "0",
  },
}));

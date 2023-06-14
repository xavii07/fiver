import { styled } from "@mui/material";
import { Link } from "react-router-dom";

interface PropsBoton {
  titulo: string;
  to: string;
}

const BotonComponent: React.FC<PropsBoton> = ({ titulo, to }) => {
  return <ButtonPer to={to}>{titulo}</ButtonPer>;
};

const ButtonPer = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "0.5rem 1rem",
  border: `1px solid ${theme.palette.primary.main}`,
  textDecoration: "none",
  fontSize: "15px",
  "&:hover": {
    opacity: 0.8,
  },
}));

export default BotonComponent;

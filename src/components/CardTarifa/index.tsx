import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

interface ICardTarifaProps {
  titulo: string;
}

const CardTarifa: React.FC<ICardTarifaProps> = ({ titulo }) => {
  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined" style={{ padding: "2rem" }}>
        <CardContent>
          <Typography
            variant="h3"
            sx={{ fontSize: 22, fontWeight: "bold", marginBottom: 3 }}
          >
            {titulo}
          </Typography>
          <Divider />
          <div
            style={{
              fontSize: "0.8rem",
              border: "1px solid #01cd757d",
              paddingLeft: "1rem",
              marginBottom: "2rem",
            }}
          >
            <ul>
              <li>Km Limitado</li>
              <li>Protección del vehículo</li>
            </ul>
          </div>
          <h2
            style={{
              display: "inline",
              color: "#01cd74",
            }}
          >
            USD 46,32
          </h2>
          <span> /A diario</span>
        </CardContent>
        <CardActions>
          <Button variant="contained">ELEGIR ESTA TARIFA</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardTarifa;

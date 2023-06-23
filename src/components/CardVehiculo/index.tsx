import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { IVehiculo } from "../../interfaces/vehiculo";
import "./styles.css";
import { Button, Rating } from "@mui/material";

const CardVehiculo = ({ vehiculo }: { vehiculo: IVehiculo }) => {
  const descripcion = vehiculo?.descripcion?.substring(0, 150) + "...";

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        rowGap: "10rem",
        colGap: "13rem",
        marginBottom: "1rem",
        flexDirection: "row-reverse",
      }}
    >
      <div>
        <CardMedia
          sx={{ width: 400 }}
          component="img"
          image={`${vehiculo?.imagenes[0]}`}
          alt="Paella dish"
        />
      </div>
      <div>
        <CardHeader
          component="h4"
          title={`${vehiculo?.modelo}`}
          subheader={`${vehiculo?.anio} - ${vehiculo?.Marca.nombre}`}
          titleTypographyProps={{
            fontSize: "1.6rem",
            fontWeight: "bold",
          }}
          subheaderTypographyProps={{
            fontSize: "1rem",
            fontWeight: "bold",
            paddingBottom: 0,
          }}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`${vehiculo?.tipo}`}
          </Typography>
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" variant="outlined">
            Reservar
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default CardVehiculo;

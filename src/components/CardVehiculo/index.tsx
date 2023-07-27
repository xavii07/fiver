import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { IVehiculoResponse } from "../../interfaces/vehiculo";
import "./styles.css";
import { Button, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CardVehiculo = ({ vehiculo }: { vehiculo: IVehiculoResponse }) => {
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
        justifyContent: "space-between",
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
          component={() => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
            >
              <div>
                <h1
                  style={{ marginTop: 0, marginBottom: 0, marginLeft: "1rem" }}
                >
                  {vehiculo.modelo}
                </h1>
                <p
                  style={{ marginTop: 0, marginBottom: 0, marginLeft: "1rem" }}
                >
                  {vehiculo.anio} - {vehiculo?.Marca?.nombre}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <Chip
                    component={"h1"}
                    label={`${vehiculo.precioHora}`}
                    variant="outlined"
                    icon={<AttachMoneyIcon />}
                  />
                  <p
                    style={{
                      margin: 0,
                      textAlign: "center",
                      fontSize: "0.8rem",
                      color: "#666",
                    }}
                  >
                    100Km
                  </p>
                </div>
                <div>
                  <Chip
                    component={"h1"}
                    variant="outlined"
                    label={`${vehiculo.precioDia}`}
                    icon={<AttachMoneyIcon />}
                  />
                  <p
                    style={{
                      margin: 0,
                      textAlign: "center",
                      fontSize: "0.8rem",
                      color: "#666",
                    }}
                  >
                    km libres
                  </p>
                </div>
              </div>
            </div>
          )}
        />

        <CardContent>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <Chip
              size="small"
              variant="outlined"
              color="primary"
              label={`${vehiculo?.tipo}`}
              icon={<CarRentalIcon />}
            />
            <Chip
              size="small"
              variant="outlined"
              color="primary"
              label={`HP - ${vehiculo?.motorHp}`}
            />
            <Chip
              variant="outlined"
              color="primary"
              size="small"
              label={`${vehiculo?.transmision}`}
              icon={<PermDataSettingIcon />}
            />
            <Chip
              variant="outlined"
              color="primary"
              size="small"
              label={`${vehiculo?.combustible}`}
              icon={<LocalGasStationIcon />}
            />
            <Chip
              variant="outlined"
              color="primary"
              size="small"
              label={`${vehiculo?.color}`}
              icon={<ColorLensIcon />}
            />
          </div>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" sx={{ marginBottom: "1rem" }}>
            <Link
              to={`/vehiculos/${vehiculo.id}`}
              style={{ textDecoration: "none", color: "#444" }}
            >
              Ver más...
            </Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default CardVehiculo;

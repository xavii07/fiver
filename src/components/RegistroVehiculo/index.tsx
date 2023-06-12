import { Formik, Form } from "formik";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "./styles.css";

const marcasVehiculos = [
  {
    id: 1,
    nombre: "Chevrolet",
    imagen:
      "https://www.chevrolet.com.co/content/dam/chevrolet/na/campaigns/01-images/2021/chevrolet/chevrolet-camino/chevrolet-camino-2021-01.jpg?imwidth=960",
  },
  {
    id: 2,
    nombre: "Toyota",
    imagen: "https://www.toyota.com.co/themes/custom/toyota/images/logo.png",
  },
  {
    id: 3,
    nombre: "Mazda",
    imagen: "https://www.mazda.com.co/themes/custom/mazda/images/logo.png",
  },
];

const tipoTransmision = [
  {
    id: 1,
    nombre: "Automatica",
    values: "automatica",
  },
  {
    id: 2,
    nombre: "Manual",
    values: "manual",
  },
  {
    id: 3,
    nombre: "CVT",
    values: "cvt",
  },
  {
    id: 4,
    nombre: "Automatizada o secuencial",
    values: "automatizada",
  },
];

const RegistroVehiculo: React.FC = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form
        style={{
          marginTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <Grid item xs={12} sm={12}>
          <Typography
            variant="body1"
            sx={{ mt: 1, mb: 1.5, textDecoration: "underline" }}
          >
            Datos de Vehiculo
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Placa"
              variant="outlined"
              placeholder="PAC9458"
              autoComplete="off"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              select
              label="Marca"
              size="small"
              fullWidth
              defaultValue={marcasVehiculos[0].nombre}
              helperText="Seleccione la marca del vehiculo"
            >
              {marcasVehiculos.map((marca) => (
                <MenuItem key={marca.id} value={marca.nombre}>
                  {marca.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Modelo"
              variant="outlined"
              placeholder="Aventador SVJ"
              autoComplete="off"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Tipo de vehiculo"
              variant="outlined"
              placeholder="Automovil"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Anio de fabricacion"
              variant="outlined"
              type="number"
              placeholder="2021"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Color"
              variant="outlined"
              placeholder="Azul marino"
              autoComplete="off"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              select
              label="Tipo de transmision"
              size="small"
              fullWidth
              defaultValue={tipoTransmision[0].values}
              helperText="Seleccione el tipo de transmision"
            >
              {tipoTransmision.map((tipoT) => (
                <MenuItem key={tipoT.id} value={tipoT.values}>
                  {tipoT.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Tipo de combustible"
              variant="outlined"
              placeholder="Gasolina"
              autoComplete="off"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Motor HP"
              variant="outlined"
              type="number"
              placeholder="3000"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Numero de cilindros"
              variant="outlined"
              type="number"
              placeholder="4"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Numero de pasajeros"
              variant="outlined"
              type="number"
              placeholder="4"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Numero de puertas"
              variant="outlined"
              type="number"
              placeholder="4"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className="inputReal">
              <input type="file" multiple />
              <div className="inputPerso">🏎️ Seleccione las imagenes</div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Descripcion"
              variant="outlined"
              placeholder="Vehiculo de lujo de la marca Lamborghini"
              autoComplete="off"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography
              variant="body1"
              sx={{ mt: 1, mb: 1, textDecoration: "underline" }}
            >
              Caracteristicas Adicionales
            </Typography>
          </Grid>

          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="abs" sx={{ textAlign: "center" }}>
                ABS
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="abs"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="ac" sx={{ textAlign: "center" }}>
                AC
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="ac"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="blue" sx={{ textAlign: "center" }}>
                Bluetooth
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="blue"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="gps" sx={{ textAlign: "center" }}>
                GPS
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="gps"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="airbag" sx={{ textAlign: "center" }}>
                Airbag
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="airbag"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={2}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="reversa" sx={{ textAlign: "center" }}>
                Camara de reversa
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="reversa"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="nebli" sx={{ textAlign: "center" }}>
                Neblineros
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="nebli"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={2}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="radio" sx={{ textAlign: "center" }}>
                Radio AM/FM
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="radio"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FormControl sx={{ display: "flex", justifyContent: "center" }}>
              <FormLabel id="stereo" sx={{ textAlign: "center" }}>
                Stereo
              </FormLabel>
              <RadioGroup
                sx={{ flexDirection: "row", justifyContent: "center" }}
                aria-labelledby="stereo"
                defaultValue="false"
              >
                <FormControlLabel value="true" control={<Radio />} label="Si" />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography
              variant="body1"
              sx={{ mt: 1, mb: 1, textDecoration: "underline" }}
            >
              Datos para Reserva
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              label="Precio por hora"
              variant="outlined"
              type="number"
              placeholder="40"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Precio por dia"
              variant="outlined"
              type="number"
              placeholder="150"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>

          <Grid item xs={12} sm={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
            >
              Registrar vehiculo
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default RegistroVehiculo;

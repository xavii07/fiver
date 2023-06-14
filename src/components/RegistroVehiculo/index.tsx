import { Formik, Form, ErrorMessage } from "formik";
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
import { automovilValidation } from "../../validaciones/automovilesValidation";
import { initialValues, marcasVehiculos, tipoTransmision } from "./values";
import MessageErr from "../MessageError";

const RegistroVehiculo: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={automovilValidation}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values, handleChange }) => (
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
                value={values.placa}
                name="placa"
                onChange={handleChange}
                variant="outlined"
                placeholder="PAC9458"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.placa && touched.placa ? true : false}
              />
              <ErrorMessage name="placa">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                select
                label="Marca"
                size="small"
                name="marca"
                onChange={handleChange}
                value={values.marca}
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
                name="modelo"
                onChange={handleChange}
                value={values.modelo}
                error={errors.modelo && touched.modelo ? true : false}
              />
              <ErrorMessage name="modelo">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Tipo de vehiculo"
                variant="outlined"
                placeholder="Automovil"
                fullWidth
                size="small"
                name="tipoVehiculo"
                onChange={handleChange}
                value={values.tipoVehiculo}
                error={
                  errors.tipoVehiculo && touched.tipoVehiculo ? true : false
                }
              />
              <ErrorMessage name="tipoVehiculo">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Anio de fabricacion"
                variant="outlined"
                type="number"
                placeholder="2021"
                fullWidth
                size="small"
                name="anioFabricacion"
                onChange={handleChange}
                value={values.anio}
                error={errors.anio && touched.anio ? true : false}
              />
              <ErrorMessage name="anio">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Color"
                variant="outlined"
                placeholder="Azul marino"
                autoComplete="off"
                size="small"
                fullWidth
                name="color"
                onChange={handleChange}
                value={values.color}
                error={errors.color && touched.color ? true : false}
              />
              <ErrorMessage name="color">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                select
                label="Tipo de transmision"
                size="small"
                fullWidth
                defaultValue={tipoTransmision[0].values}
                name="tipoTransmision"
                onChange={handleChange}
                value={values.tipoTransmision}
                error={
                  errors.tipoTransmision && touched.tipoTransmision
                    ? true
                    : false
                }
              >
                {tipoTransmision.map((tipoT) => (
                  <MenuItem key={tipoT.id} value={tipoT.values}>
                    {tipoT.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <ErrorMessage name="tipoTransmision">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Tipo de combustible"
                variant="outlined"
                placeholder="Gasolina"
                autoComplete="off"
                size="small"
                fullWidth
                name="tipoCombustible"
                onChange={handleChange}
                value={values.tipoCombustible}
                error={
                  errors.tipoCombustible && touched.tipoCombustible
                    ? true
                    : false
                }
              />
              <ErrorMessage name="tipoCombustible">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Motor HP"
                variant="outlined"
                type="number"
                placeholder="3000"
                fullWidth
                size="small"
                name="motorHP"
                onChange={handleChange}
                value={values.motorHp}
                error={errors.motorHp && touched.motorHp ? true : false}
              />
              <ErrorMessage name="motorHp">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Numero de cilindros"
                variant="outlined"
                type="number"
                placeholder="4"
                fullWidth
                size="small"
                name="numeroCilindros"
                onChange={handleChange}
                value={values.numeroCilindros}
                error={
                  errors.numeroCilindros && touched.numeroCilindros
                    ? true
                    : false
                }
              />
              <ErrorMessage name="numeroCilindros">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Numero de pasajeros"
                variant="outlined"
                type="number"
                placeholder="4"
                fullWidth
                size="small"
                name="numeroPasajeros"
                onChange={handleChange}
                value={values.numeroPasajeros}
                error={
                  errors.numeroPasajeros && touched.numeroPasajeros
                    ? true
                    : false
                }
              />
              <ErrorMessage name="numeroPasajeros">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Numero de puertas"
                variant="outlined"
                type="number"
                placeholder="4"
                fullWidth
                size="small"
                name="numeroPuertas"
                onChange={handleChange}
                value={values.numeroPuertas}
                error={
                  errors.numeroPuertas && touched.numeroPuertas ? true : false
                }
              />
              <ErrorMessage name="numeroPuertas">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
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
                name="descripcion"
                onChange={handleChange}
                value={values.descripcion}
                error={errors.descripcion && touched.descripcion ? true : false}
              />
              <ErrorMessage name="descripcion">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                  />
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
                name="precioHora"
                onChange={handleChange}
                value={values.precioHora}
                error={errors.precioHora && touched.precioHora ? true : false}
              />
              <ErrorMessage name="precioHora">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Precio por dia"
                variant="outlined"
                type="number"
                placeholder="150"
                fullWidth
                size="small"
                name="precioDia"
                onChange={handleChange}
                value={values.precioDia}
                error={errors.precioDia && touched.precioDia ? true : false}
              />
              <ErrorMessage name="precioDia">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
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
      )}
    </Formik>
  );
};

export default RegistroVehiculo;

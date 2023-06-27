import { Formik, Form, ErrorMessage, Field, FieldProps } from "formik";
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
import { vehiculoValidation } from "../../utils/vehiculoValidation";
import { initialValues, tipoTransmision } from "./values";
import MessageErr from "../MessageError";
import { useEffect } from "react";
import { useMarcas } from "../../hooks/useMarcas";
import "./styles.css";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculo } from "../../interfaces/vehiculo";

interface FormValues {
  files: FileList | undefined;
}

const RegistroVehiculo: React.FC = () => {
  const { getMarcasByEstado, marcas } = useMarcas();
  const {
    subirImagenes,
    createVehiculo,
    editvehiculo,
    updateVehiculo,
    setEditvehiculo,
  } = useVehiculos();

  useEffect(() => {
    getMarcasByEstado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(editvehiculo).length !== 0) {
      initialValues.placa = editvehiculo.placa;
      initialValues.idMarca = editvehiculo.idMarca;
      initialValues.modelo = editvehiculo.modelo;
      initialValues.tipo = editvehiculo.tipo;
      initialValues.anio = editvehiculo.anio;
      initialValues.color = editvehiculo.color;
      initialValues.transmision = editvehiculo.transmision;
      initialValues.combustible = editvehiculo.combustible;
      initialValues.motorHp = editvehiculo.motorHp;
      initialValues.cilindros = editvehiculo.cilindros;
      initialValues.pasajeros = editvehiculo.pasajeros;
      initialValues.puertas = editvehiculo.puertas;
      initialValues.descripcion = editvehiculo.descripcion;
      initialValues.abs = editvehiculo.abs;
      initialValues.ac = editvehiculo.ac;
      initialValues.bluetooth = editvehiculo.bluetooth;
      initialValues.gps = editvehiculo.gps;
      initialValues.airbag = editvehiculo.airbag;
      initialValues.camaraReversa = editvehiculo.camaraReversa;
      initialValues.neblineros = editvehiculo.neblineros;
      initialValues.radio = editvehiculo.radio;
      initialValues.sonidoStereo = editvehiculo.sonidoStereo;
      initialValues.precioHora = editvehiculo.precioHora;
      initialValues.precioDia = editvehiculo.precioDia;
    } else {
      initialValues.placa = "";
      initialValues.idMarca = undefined;
      initialValues.modelo = "";
      initialValues.tipo = "";
      initialValues.anio = "";
      initialValues.color = "";
      initialValues.transmision = "";
      initialValues.combustible = "";
      initialValues.motorHp = "";
      initialValues.cilindros = undefined;
      initialValues.pasajeros = undefined;
      initialValues.puertas = undefined;
      initialValues.descripcion = "";
      initialValues.abs = false;
      initialValues.ac = false;
      initialValues.bluetooth = false;
      initialValues.gps = false;
      initialValues.airbag = false;
      initialValues.camaraReversa = false;
      initialValues.neblineros = false;
      initialValues.radio = false;
      initialValues.sonidoStereo = false;
      initialValues.precioHora = undefined;
      initialValues.precioDia = undefined;
    }
  }, [editvehiculo]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={vehiculoValidation}
      onSubmit={async (values) => {
        if (Object.keys(editvehiculo).length !== 0) {
          if (values.imagenes && values.imagenes.length > 0 && values.placa) {
            const images = values.imagenes;
            const imagesUrls = await subirImagenes(
              images as File[],
              values.placa
            );
            const vehiculoUnido = {
              ...values,
              imagenes: imagesUrls,
            };
            updateVehiculo(vehiculoUnido as IVehiculo);
            setEditvehiculo({} as IVehiculo);
          }
        } else {
          if (values.imagenes && values.imagenes.length > 0 && values.placa) {
            const images = values.imagenes;
            const imagesUrls = await subirImagenes(
              images as File[],
              values.placa
            );

            const vehiculoUnido = {
              ...values,
              imagenes: imagesUrls,
            };

            createVehiculo(vehiculoUnido as IVehiculo);
          }
        }
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
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
              Datos de Vehículo
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Placa"
                value={values.placa}
                name="placa"
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="idMarca"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.idMarca || ""}
                fullWidth
                error={errors.idMarca && touched.idMarca ? true : false}
              >
                {marcas.map((marca) => (
                  <MenuItem key={marca.id} value={marca.id}>
                    {marca.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <ErrorMessage name="idMarca">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
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
                onBlur={handleBlur}
                value={values.modelo}
                error={errors.modelo && touched.modelo ? true : false}
              />
              <ErrorMessage name="modelo">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Tipo de vehículo"
                variant="outlined"
                placeholder="Automóvil"
                fullWidth
                size="small"
                name="tipo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.tipo}
                error={errors.tipo && touched.tipo ? true : false}
              />
              <ErrorMessage name="tipo">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Año de fabricación"
                variant="outlined"
                type="number"
                placeholder="2021"
                fullWidth
                size="small"
                name="anio"
                onChange={handleChange}
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                label="Tipo de transmisión"
                size="small"
                fullWidth
                name="transmision"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.transmision}
                error={errors.transmision && touched.transmision ? true : false}
              >
                {tipoTransmision.map((tipoT) => (
                  <MenuItem key={tipoT.id} value={tipoT.values}>
                    {tipoT.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <ErrorMessage name="transmision">
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
                name="combustible"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.combustible}
                error={errors.combustible && touched.combustible ? true : false}
              />
              <ErrorMessage name="combustible">
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
                name="motorHp"
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="cilindros"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cilindros || ""}
                error={errors.cilindros && touched.cilindros ? true : false}
              />
              <ErrorMessage name="cilindros">
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
                name="pasajeros"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.pasajeros || ""}
                error={errors.pasajeros && touched.pasajeros ? true : false}
              />
              <ErrorMessage name="pasajeros">
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
                name="puertas"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.puertas || ""}
                error={errors.puertas && touched.puertas ? true : false}
              />
              <ErrorMessage name="puertas">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Field name="imagenes">
                {({ field, form }: FieldProps<FormValues>) => (
                  <div className="inputReal">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .gif, .webp "
                      multiple
                      onChange={(event) => {
                        form.setFieldValue(
                          field.name,
                          event.currentTarget.files
                        );
                      }}
                    />
                    <div className="inputPerso">🏎️ Seleccione las imagenes</div>
                  </div>
                )}
              </Field>
              <ErrorMessage name="imagenes">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Descripción"
                variant="outlined"
                placeholder="Vehículo de lujo de la marca Lamborghini"
                autoComplete="off"
                size="small"
                fullWidth
                name="descripcion"
                onChange={handleChange}
                onBlur={handleBlur}
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
                Características Adicionales
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="abs"
                  value={values.abs}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="ac"
                  value={values.ac}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="bluetooth"
                  value={values.bluetooth}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="gps"
                  value={values.gps}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="airbag"
                  value={values.airbag}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={2}>
              <FormControl sx={{ display: "flex", justifyContent: "center" }}>
                <FormLabel id="reversa" sx={{ textAlign: "center" }}>
                  Cámara de reversa
                </FormLabel>
                <RadioGroup
                  sx={{ flexDirection: "row", justifyContent: "center" }}
                  aria-labelledby="reversa"
                  defaultValue={false}
                  onChange={handleChange}
                  name="camaraReversa"
                  value={values.camaraReversa}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="neblineros"
                  value={values.neblineros}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="radio"
                  value={values.radio}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                  defaultValue={false}
                  onChange={handleChange}
                  name="sonidoStereo"
                  value={values.sonidoStereo}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={false}
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
                onBlur={handleBlur}
                value={values.precioHora || ""}
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
                onBlur={handleBlur}
                value={values.precioDia || ""}
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
                {Object.keys(editvehiculo).length !== 0
                  ? "Editar vehículo"
                  : "Registrar vehículo"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroVehiculo;

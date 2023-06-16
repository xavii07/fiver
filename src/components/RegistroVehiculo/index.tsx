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
import "./styles.css";
import { vehiculoValidation } from "../../utils/vehiculoValidation";
import { initialValues, tipoTransmision } from "./values";
import MessageErr from "../MessageError";
import { supabase } from "../../supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../../router/router";

interface FormValues {
  files: FileList | null;
}
interface Marca {
  id: number;
  nombre: string;
  imagen: string;
}

const RegistroVehiculo: React.FC = () => {
  const [marcas, setMarcas] = useState<Marca[]>([]);

  const navigation = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("Marca").select("*");
      if (error) {
        console.error("Error al obtener los elementos:", error.message);
      } else {
        setMarcas(data);
      }
    };

    fetchItems();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={vehiculoValidation}
      onSubmit={async (values) => {
        console.log(values);
        const { data, error } = await supabase.from("Vehiculo").insert([
          {
            placa: values.placa,
            idMarca: values.marca,
            modelo: values.modelo,
            tipo: values.tipo,
            anio: values.anio,
            transmision: values.transmision,
            combustible: values.combustible,
            motorHp: values.motorHp,
            cilindros: values.cilindros,
            pasajeros: values.pasajeros,
            puertas: values.puertas,
            color: values.color,
            descripcion: values.descripcion,
            imagenes: values.imagenes,
            abs: values.abs,
            ac: values.ac,
            bluetooth: values.bluetooth,
            gps: values.gps,
            airbag: values.airbag,
            camaraReversa: values.camaraReversa,
            neblineros: values.neblineros,
            radio: values.radio,
            sonidoStereo: values.sonidoStereo,
            precioHora: values.precioHora,
            precioDia: values.precioDia,
          },
        ]);

        if (error) {
          return toast.error("Error al registrar el vehiculo");
        }

        toast.success("Vehículo registrado correctamente");
        (values.placa = ""),
          (values.marca = ""),
          (values.modelo = ""),
          (values.tipo = ""),
          (values.anio = ""),
          (values.transmision = ""),
          (values.combustible = ""),
          (values.motorHp = ""),
          (values.cilindros = ""),
          (values.pasajeros = ""),
          (values.puertas = ""),
          (values.color = ""),
          (values.descripcion = ""),
          (values.imagenes = null),
          (values.abs = false),
          (values.ac = false),
          (values.bluetooth = false),
          (values.gps = false),
          (values.airbag = false),
          (values.camaraReversa = false),
          (values.neblineros = false),
          (values.radio = false),
          (values.sonidoStereo = false),
          (values.precioHora = ""),
          (values.precioDia = ""),
          navigation(RUTAS_PRIVADAS.VEHICULOS);
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
                name="marca"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.marca}
                fullWidth
              >
                <MenuItem value="" defaultChecked>
                  --Seleccione una marca--
                </MenuItem>
                {marcas.map((marca) => (
                  <MenuItem key={marca.id} value={marca.id}>
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
                label="Tipo de vehiculo"
                variant="outlined"
                placeholder="Automovil"
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
                label="Anio de fabricacion"
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
                label="Tipo de transmision"
                size="small"
                fullWidth
                defaultValue={tipoTransmision[0].values}
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
                value={values.cilindros}
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
                value={values.pasajeros}
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
                value={values.puertas}
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
                label="Descripcion"
                variant="outlined"
                placeholder="Vehiculo de lujo de la marca Lamborghini"
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
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Si"
                    name="abs"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                    name="abs"
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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

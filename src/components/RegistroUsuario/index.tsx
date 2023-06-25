import { Formik, Form, ErrorMessage } from "formik";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import MessageErr from "../MessageError";
import { categoriaLicencia, initialValues, provincias } from "./values";

import { IUsuarioRegistro } from "../../interfaces/usuario";
import { Link } from "react-router-dom";
import { RUTAS_PUBLICAS } from "../../router/router";
import { usuarioValidation } from "../../utils/usuarioValidation";

const RegistroUsuario: React.FC = () => {
  const handleSubmit = async (values: IUsuarioRegistro) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={usuarioValidation}
      validateOnBlur={true}
      enableReinitialize={true}
      context={{}}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form
          style={{
            marginTop: "1rem",
            paddingBottom: "2rem",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Cedula"
                value={values.cedula}
                name="cedula"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="1798451245"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.cedula && touched.cedula ? true : false}
              />
              <ErrorMessage name="cedula">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Nombres"
                value={values.nombres}
                name="nombres"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Juan Carlos"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.nombres && touched.nombres ? true : false}
              />
              <ErrorMessage name="nombres">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Apellidos"
                value={values.apellidos}
                name="apellidos"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Perez Perez"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.apellidos && touched.apellidos ? true : false}
              />
              <ErrorMessage name="apellidos">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                type="date"
                value={values.fechaNacimiento}
                name="fechaNacimiento"
                onChange={handleChange}
                onBlur={handleBlur}
                size="small"
                fullWidth
                error={
                  errors.fechaNacimiento && touched.fechaNacimiento
                    ? true
                    : false
                }
              />
              <ErrorMessage name="fechaNacimiento">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Celular"
                value={values.celular}
                name="celular"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="0999999999"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.celular && touched.celular ? true : false}
              />
              <ErrorMessage name="celular">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Provincia"
                size="small"
                name="provincia"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.provincia}
                fullWidth
                error={errors.provincia && touched.provincia ? true : false}
              >
                {provincias.map((provincia) => (
                  <MenuItem key={provincia.id} value={provincia.nombre}>
                    {provincia.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <ErrorMessage name="idMarca">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Direccion"
                value={values.direccion}
                name="direccion"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Av. 10 de Agosto y Av. 6 de Diciembre"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.direccion && touched.direccion ? true : false}
              />
              <ErrorMessage name="direccion">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Categoria Licencia"
                size="small"
                name="categoriaLicencia"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoriaLicencia}
                fullWidth
                error={
                  errors.categoriaLicencia && touched.categoriaLicencia
                    ? true
                    : false
                }
              >
                {categoriaLicencia.map((licencia) => (
                  <MenuItem key={licencia.id} value={licencia.nombre}>
                    {licencia.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <ErrorMessage name="idMarca">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl sx={{ display: "flex", justifyContent: "center" }}>
                <FormLabel id="sexo" sx={{ textAlign: "center" }}>
                  Sexo
                </FormLabel>
                <RadioGroup
                  sx={{ flexDirection: "row", justifyContent: "center" }}
                  aria-labelledby="sexo"
                  onChange={handleChange}
                  name="sexo"
                  value={values.sexo}
                >
                  <FormControlLabel
                    value="mujer"
                    control={<Radio />}
                    label="Mujer"
                  />
                  <FormControlLabel
                    value="hombre"
                    control={<Radio />}
                    label="Hombre"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="body1"
                sx={{ mt: 1, mb: 1, textDecoration: "underline" }}
              >
                Datos de la cuenta
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                type="email"
                label="Correo Electronico"
                value={values.correoElectronico}
                name="correoElectronico"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="alguien123@gmail.com"
                autoComplete="off"
                size="small"
                fullWidth
                error={
                  errors.correoElectronico && touched.correoElectronico
                    ? true
                    : false
                }
              />
              <ErrorMessage name="correoElectronico">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                type="password"
                label="Contraseña"
                value={values.contrasena}
                name="contrasena"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="********"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.contrasena && touched.contrasena ? true : false}
              />
              <ErrorMessage name="contrasena">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}></Grid>

            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                Registrar Usuario
              </Button>
              <p style={{ marginTop: "2rem" }}>¿Ya tienes una cuenta?</p>
              <Link
                to={RUTAS_PUBLICAS.LOGIN}
                style={{ textDecoration: "none" }}
              >
                Iniciar Sesion
              </Link>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroUsuario;
import { Formik, Form, ErrorMessage, Field, FieldProps } from "formik";
import { Grid, TextField, Button } from "@mui/material";
import { useMarcas } from "../../hooks/useMarcas";
import { IFormValueMarca } from "../../interfaces/formValueMarca";
import MessageErr from "../MessageError";

import { marcaValidation } from "../../utils/marcaValidation";
import { initialValues } from "./values";
import { useEffect } from "react";
import { IMarca } from "../../interfaces/marca";
import "./styles.css";

const RegistroMarca: React.FC = () => {
  const { createMarca, subirImagen, editmarca, updateMarca, setEditMarca } =
    useMarcas();

  useEffect(() => {
    if (Object.keys(editmarca).length !== 0) {
      initialValues.codigo = editmarca.codigo;
      initialValues.nombre = editmarca.nombre;
    } else {
      initialValues.codigo = "";
      initialValues.nombre = "";
    }
  }, [editmarca]);

  const handleSubmit = async (values: IFormValueMarca) => {
    if (Object.keys(editmarca).length !== 0) {
      if (
        values.imagen &&
        values.imagen.length !== undefined &&
        values.imagen.length > 0
      ) {
        const data = await subirImagen(values.imagen[0]);
        const imagenUrl = `${import.meta.env.VITE_URL_IMAGEN}${data.path}`;
        updateMarca({
          id: editmarca?.id,
          codigo: values.codigo,
          nombre: values.nombre,
          imagen: imagenUrl,
        });
        setEditMarca({} as IMarca);
      }
    } else {
      if (
        values.imagen &&
        values.imagen.length !== undefined &&
        values.imagen.length > 0
      ) {
        const data = await subirImagen(values.imagen[0]);
        const imagenUrl = `${import.meta.env.VITE_URL_IMAGEN}${data.path}`;
        createMarca(values.nombre, values.codigo, imagenUrl);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={marcaValidation}
      onSubmit={handleSubmit}
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
                label="Codigo"
                value={values.codigo}
                name="codigo"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="CHEVFIVER"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.codigo && touched.codigo ? true : false}
              />
              <ErrorMessage name="codigo">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Marca"
                value={values.nombre}
                name="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                placeholder="Chevrolet"
                autoComplete="off"
                size="small"
                fullWidth
                error={errors.nombre && touched.nombre ? true : false}
              />
              <ErrorMessage name="nombre">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Field name="imagen">
                {({ field, form }: FieldProps<IFormValueMarca>) => (
                  <div className="inputReal">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .gif, .webp "
                      onChange={(event) => {
                        form.setFieldValue(
                          field.name,
                          event.currentTarget.files
                        );
                      }}
                    />
                    <div className="inputPerso">Seleccione la imagen</div>
                  </div>
                )}
              </Field>
              <ErrorMessage name="imagen">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>

            {Object.keys(editmarca).length !== 0 ? (
              <Grid item xs={12} sm={12}>
                <p>Imagen actual</p>
                <div>
                  <img
                    src={editmarca.imagen}
                    alt="imagen"
                    width={150}
                    height={130}
                  />
                </div>
              </Grid>
            ) : null}

            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                {Object.keys(editmarca).length !== 0
                  ? "Editar marca"
                  : "Registrar marca"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroMarca;

import { Formik, Form, ErrorMessage, Field, FieldProps } from "formik";
import { Grid, TextField, Button } from "@mui/material";
import { initialValues } from "./values";
import MessageErr from "../MessageError";
import { marcaValidation } from "../../utils/marcaValidation";
import { useMarcas } from "../../context/MarcaContext";

interface FormValues {
  files: FileList | null;
}

const RegistroMarca: React.FC = () => {
  const { createMarca } = useMarcas();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={marcaValidation}
      onSubmit={async (values) => {
        createMarca(values.nombre);
      }}
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
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <Field name="imagen">
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
                    <div className="inputPerso">Seleccione la imagen</div>
                  </div>
                )}
              </Field>
              <ErrorMessage name="imagen">
                {(msg) => <MessageErr message={msg} />}
              </ErrorMessage>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                Registrar marca
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroMarca;

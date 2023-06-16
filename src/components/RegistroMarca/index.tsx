import { Formik, Form, ErrorMessage, Field, FieldProps } from "formik";
import { Grid, TextField, Button } from "@mui/material";
import { initialValues } from "./values";
import MessageErr from "../MessageError";
import { marcaValidation } from "../../utils/marcaValidation";
import { supabase } from "../../supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { RUTAS_PRIVADAS } from "../../router/router";

interface FormValues {
  files: FileList | null;
}

const RegistroMarca: React.FC = () => {
  const navigation = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={marcaValidation}
      onSubmit={async (values) => {
        console.log(values);
        const { error } = await supabase.from("Marca").insert({
          nombre: values.nombre,
        });

        if (error) {
          return toast.error("Error al registrar la marca");
        }

        toast.success("Marca registrada correctamente");
        values.nombre = "";
        navigation(RUTAS_PRIVADAS.MARCAS);
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

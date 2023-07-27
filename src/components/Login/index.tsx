import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { loginValidation } from "../../utils/loginValidation";
import { useFormik } from "formik";
import imgLogin from "/login.png";
import { Gridd, Imagen, Titulo } from "./style";
import { Link } from "react-router-dom";
import { RUTAS_PUBLICAS } from "../../router/router";
import { supabase } from "../../supabase/client";
import { toast } from "sonner";
import useAuthContext from "../../context/LoginContext";

type LoginType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { setIsAuth } = useAuthContext();

  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success(`Bienvenido ${data?.user?.user_metadata?.nombres}`);
      setIsAuth(true);
    },
  });

  return (
    <Container sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Gridd
        container
        justifyContent="space-around"
        alignItems={"center"}
        maxWidth="lg"
        sx={{ margin: "0 auto" }}
        flexWrap="nowrap"
        borderRadius={2}
        boxShadow="0px 10px 15px -3px rgba(0,0,0,0.1)"
      >
        <Grid item>
          <Paper
            sx={{
              paddingX: "3rem",
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Box>
              <Titulo>Iniciar Sesión</Titulo>
              <Typography variant="h6" sx={{ mb: 2, color: "#bbb" }}>
                (FIVER)
              </Typography>
            </Box>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                name="email"
                autoComplete="off"
                margin="normal"
                fullWidth
                label="Correo Electrónico"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                type="password"
                name="password"
                margin="normal"
                fullWidth
                label="Contraseña"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1.5, mb: 3, py: 1.5 }}
                type="submit"
              >
                Iniciar Sesión
              </Button>
              <p style={{ margin: 0 }}>¿No tienes una cuenta?</p>
              <Link
                to={RUTAS_PUBLICAS.REGISTRO_USUARIO}
                style={{ textDecoration: "none" }}
              >
                Regístrate
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Box>
            <Imagen src={imgLogin} alt="login" />
          </Box>
        </Grid>
      </Gridd>
    </Container>
  );
};

export default Login;

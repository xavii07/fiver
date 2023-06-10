import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar position="sticky" sx={{ background: "#fff", boxShadow: "0" }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <Typography>FIVER</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Iniciar Sesion
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

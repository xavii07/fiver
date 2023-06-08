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


const Navbar: React.FC = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Container>
            <Grid container justifyContent="space-between" direction="row" alignItems="center">
              <Grid item>
                <Typography>FIVER</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained">Registrar</Button>
                  <Button variant="outlined">Iniciar Sesion</Button>
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

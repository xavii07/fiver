import { Box, Grid, Typography } from "@mui/material";
import "./styles.css";

type HeaderProps = {
  title: string;
  description: string;
  element?: React.ReactNode | null;
};

const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
  element,
}) => {
  return (
    <>
      <Box
        sx={{ width: "100%", height: "calc(100vh - 64px)" }}
        className="fondo"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "calc(100vh - 64px)",
                textAlign: "center",
              }}
            >
              <Grid item>
                <Typography variant="h1">{title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{description}</Typography>
              </Grid>
              {element && (
                <Grid item sx={{ marginTop: 4 }}>
                  {element}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderComponent;

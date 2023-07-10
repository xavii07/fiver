import { Container } from "@mui/material";
import ReservaComponent from "../../components/Reserva";

const ReservaPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "4rem" }}>
        <ReservaComponent />
      </div>
    </Container>
  );
};

export default ReservaPage;

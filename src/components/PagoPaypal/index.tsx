import { Container } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PagoPaypayComponent: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "3rem" }}>
      <PayPalScriptProvider>
        <PayPalButtons />
      </PayPalScriptProvider>
    </Container>
  );
};

export default PagoPaypayComponent;

import { Container } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PagoPaypayComponent: React.FC = () => {
  const options = {
    clientId:
      "AXmFalf1lhKeWU7JY3bsLnWROGHsFqnLhW8_VPEYBPVS5Vy4L1vrKCAmfyGCEdkHbrBvQTqxgMbFEcSc",
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "3rem" }}>
      <PayPalScriptProvider options={options}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </Container>
  );
};

export default PagoPaypayComponent;

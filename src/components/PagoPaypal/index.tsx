import { Container } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PagoPaypayComponent: React.FC = () => {
  const options = {
    clientId: import.meta.env.VITE_URL_PAYPAL_KEY,
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "3rem" }}>
      <PayPalScriptProvider options={options}>
        <PayPalButtons
          createOrder={(_data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "45",
                  },
                },
              ],
            });
          }}
        />
      </PayPalScriptProvider>
    </Container>
  );
};

export default PagoPaypayComponent;

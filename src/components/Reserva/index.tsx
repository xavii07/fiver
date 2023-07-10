import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FechaReserva from "../FechaReserva";
import PagoPaypayComponent from "../PagoPaypal";

const ComponentePaso2: React.FC = () => {
  return (
    <div>
      <p>Paso 1</p>
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
  );
};

const ComponentePaso3: React.FC = () => {
  return <p>Paso 3</p>;
};

const ReservaComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Seleccionar Fecha y Hora",
      component: <FechaReserva />,
    },
    {
      label: "Vehiculo y Extras",
      component: <ComponentePaso2 />,
    },
    {
      label: "Pago",
      component: <PagoPaypayComponent />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box>
        {activeStep === steps.length ? (
          <div>
            <p>¡Reserva completada!</p>
            <Button onClick={handleReset}>Reiniciar</Button>
          </div>
        ) : (
          <div>
            {steps[activeStep].component}
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Anterior
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default ReservaComponent;

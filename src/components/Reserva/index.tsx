import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FechaReserva from "../FechaReserva";
import PagoPaypayComponent from "../PagoPaypal";
import useAuthContext from "../../context/LoginContext";
import { useParams } from "react-router-dom";
import { useVehiculos } from "../../hooks/useVehiculos";
import { initialValues } from "../../components/RegistroVehiculo/values";
import { IVehiculoResponse } from "../../interfaces/vehiculo";
import CardVehiculo from "../CardVehiculo";
import CardTarifa from "../CardTarifa";

const ComponentePaso2: React.FC = () => {
  const { user } = useAuthContext();

  const { id } = useParams<{ id?: string }>();
  const { getVehiculoById } = useVehiculos();
  const [vehiculo, setVehiculo] = useState<IVehiculoResponse>({
    ...initialValues,
    imagenes: [],
    Marca: {
      nombre: "",
    },
    reservado: false,
  });

  useEffect(() => {
    getVehiculoById(+`${id}`).then((vehiculo) => {
      if (vehiculo) {
        setVehiculo(vehiculo as IVehiculoResponse);
      }
    });
  }, [getVehiculoById, id]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          padding: "3rem",
        }}
      >
        <div
          style={{
            flexBasis: "100%",
            padding: "2rem",
          }}
        >
          <h3>DATOS DEL USUARIO</h3>
          <p>
            Nombre: {user.nombres} {user.apellidos}
          </p>
          <p>Cedula: {user.cedula}</p>
          <p>Email: {user.correoElectronico}</p>
          <p>Celular: {user.celular}</p>
          <p>Domicilio: {user.provincia}</p>
        </div>
        <div style={{ flexShrink: 6 }}>
          <CardVehiculo vehiculo={vehiculo} />
        </div>
      </div>
      <div>
        <h3>Total a cancelar</h3>
        <div style={{ background: "#57b652" }}>
          <p>Subtotal: {50}</p>
          <p>IVA: {50 * 0.12}</p>
          <p>Total: {(50 * 1.12).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

const ReservaComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Seleccionar Fecha y Hora de su reserva",
      component: <FechaReserva />,
    },
    {
      label: "Selecciona la mejor tarifa",
      component: (
        <div
          style={{
            display: "flex",
            marginTop: "5rem",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <CardTarifa titulo="OFERTA FIVER - 100 KM/DÍA" />
          <CardTarifa titulo="OFERTA FIVER - KM LIBRE" />
        </div>
      ),
    },
    {
      label: "Confirmacion de Datos",
      component: <ComponentePaso2 />,
    },
    {
      label: "Confirmacion de Datos",
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
        {steps.map((step) => (
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

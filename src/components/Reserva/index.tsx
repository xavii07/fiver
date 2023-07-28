import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FechaReserva from "../FechaReserva";
import PagoPaypayComponent from "../PagoPaypal";
import CardTarifa from "../CardTarifa";
import InformacionReserva from "../InfoReserva";
import { useParams } from "react-router-dom";
import { useVehiculos } from "../../hooks/useVehiculos";
import { IVehiculoResponse } from "../../interfaces/vehiculo";
import { initialValues } from "../RegistroVehiculo/values";
import { Container } from "@mui/system";
import { Dayjs } from "dayjs";

const ReservaComponent: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [vehiculo, setVehiculo] = useState<IVehiculoResponse>({
    ...initialValues,
    imagenes: [],
    Marca: {
      nombre: "",
    },
    reservado: false,
  });
  const [dateinicio, setDateInicio] = useState<Dayjs | null>(null);
  const [datefin, setDateFin] = useState<Dayjs | null>(null);
  const [timeinicio, setTimeinicio] = useState<Dayjs | null>(null);
  const [timefin, setTimeFin] = useState<Dayjs | null>(null);
  const [selectedtarifa, setSelectedTarifa] = useState<{
    preciokm: number;
    nombre: string;
  }>({
    preciokm: 0,
    nombre: "",
  });

  console.log(selectedtarifa);

  const { id } = useParams<{ id: string }>();
  const { getVehiculoById } = useVehiculos();

  useEffect(() => {
    getVehiculoById(+`${id}`).then((vehiculo) => {
      if (vehiculo) {
        setVehiculo(vehiculo as IVehiculoResponse);
      }
    });
  }, [getVehiculoById, id]);
  const cantidadDias =
    dateinicio && datefin ? datefin.diff(dateinicio, "day") + 1 : 0;

  const steps = [
    {
      label: "Seleccionar Fecha y Hora de su reserva",
      component: (
        <FechaReserva
          datefin={datefin}
          setDateFin={setDateFin}
          dateinicio={dateinicio}
          setDateInicio={setDateInicio}
          timefin={timefin}
          setTimeFin={setTimeFin}
          timeinicio={timeinicio}
          setTimeinicio={setTimeinicio}
        />
      ),
    },
    {
      label: "Selecciona la mejor tarifa",
      component: (
        <Container>
          <div
            style={{
              display: "flex",
              marginTop: "5rem",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <CardTarifa
              titulo="OFERTA FIVER - 100 KM/DÍA"
              opcion1="Km Limitado"
              opcion2="Proteccion del vehiculo"
              preciokm={vehiculo.precioHora}
              setSelectedTarifa={setSelectedTarifa}
            />
            <CardTarifa
              titulo="OFERTA FIVER - KM LIBRE"
              opcion1="Km Libre"
              opcion2="Proteccion del vehiculo"
              preciokm={vehiculo.precioDia}
              setSelectedTarifa={setSelectedTarifa}
            />
          </div>
          <div>
            {cantidadDias > 0 && (
              <div>
                <div>
                  <h2>Resumen de la reserva</h2>
                  <div>
                    <div>
                      <h4 style={{ margin: 0 }}>Fecha Retiro</h4>
                      <p style={{ margin: 0 }}>
                        {dateinicio?.format("MMMM D, YYYY")}
                        {" a las "}
                        {timeinicio?.format("HH:mm")}
                      </p>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 0 }}>Fecha Devolucion</h4>
                      <p style={{ margin: 0 }}>
                        {datefin?.format("MMMM D, YYYY")}
                        {" a las "}
                        {timefin?.format("HH:mm")}
                      </p>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 0 }}>Vehiculo</h4>
                      <p style={{ margin: 0 }}>
                        {vehiculo.modelo} - {vehiculo.Marca.nombre} -{" "}
                        {vehiculo.placa}
                      </p>
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 0 }}>
                        {selectedtarifa.nombre}
                      </h4>
                      <div
                        style={{
                          maxWidth: "400px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p style={{ margin: 0 }}>Diaria</p>
                          <p style={{ margin: 0 }}>
                            {cantidadDias} x USD ${selectedtarifa.preciokm}
                          </p>
                        </div>
                        <div>
                          <p style={{ margin: 0 }}>Total</p>
                          <p style={{ margin: 0 }}>
                            USD ${selectedtarifa.preciokm * cantidadDias}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          maxWidth: "400px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <p style={{ marginBottom: 0 }}>Proteccion Parcial</p>
                          <p style={{ margin: 0 }}>
                            {cantidadDias} diaria x USD $13,20
                          </p>
                        </div>
                        <div>
                          <p style={{ margin: 0 }}>
                            USD ${(13.2 * cantidadDias).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          maxWidth: "400px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <p style={{ marginBottom: 0 }}>IVA (12%)</p>
                        </div>
                        <div>
                          <p style={{ margin: 0 }}>
                            USD $
                            {(
                              (cantidadDias * selectedtarifa.preciokm +
                                13.2 * cantidadDias) *
                              0.12
                            ).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      background: "#01602a",
                      maxWidth: "300px",
                      display: "flex",
                      marginTop: "2rem",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "#78de1f", margin: 0 }}>
                      Valor Total Esperado
                    </p>
                    <h1 style={{ color: "#fff" }}>
                      USD $
                      {(
                        cantidadDias * selectedtarifa.preciokm +
                        13.2 * cantidadDias +
                        (cantidadDias * selectedtarifa.preciokm +
                          13.2 * cantidadDias) *
                          0.12
                      ).toFixed(2)}
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      ),
    },
    {
      label: "Confirmacion de Reserva",
      component: (
        <Container>
          <InformacionReserva vehiculo={vehiculo} />
          <div>
            <div
              style={{
                background: "#01602a",
                maxWidth: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p style={{ color: "#78de1f", margin: 0 }}>
                Valor Total Esperado
              </p>
              <h1 style={{ color: "#fff" }}>
                USD $
                {(
                  cantidadDias * selectedtarifa.preciokm +
                  13.2 * cantidadDias +
                  (cantidadDias * selectedtarifa.preciokm +
                    13.2 * cantidadDias) *
                    0.12
                ).toFixed(2)}
              </h1>
            </div>
          </div>
        </Container>
      ),
    },
    {
      label: "Pago con Paypal",
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

import "./styles.css";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

const FechaReserva: React.FC = () => {
  const [dateinicio, setDateInicio] = useState<Dayjs | null>(null);
  const [datefin, setDateFin] = useState<Dayjs | null>(null);

  const inicioTime = dayjs().set("hour", 7).startOf("hour");
  const finTime = dayjs().set("hour", 22).startOf("hour");

  console.log(dateinicio?.format("DD MM YYYY"));
  console.log(datefin?.format("DD MM YYYY"));

  return (
    <div className="contenedor">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "70%",
          marginBottom: "2rem",
        }}
      >
        <p style={{ flexBasis: "100%", color: "#222", fontWeight: "bold" }}>
          Fecha y Hora - Retiro de Vehiculo
        </p>

        <DatePicker
          sx={{ width: "100%" }}
          value={dateinicio}
          disablePast
          onChange={(newValue) => setDateInicio(newValue)}
        />

        <TimePicker
          ampm={false}
          minTime={inicioTime}
          maxTime={finTime}
          views={["hours", "minutes"]}
          format="HH:mm"
          sx={{
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "70%",
        }}
      >
        <p style={{ flexBasis: "100%", color: "#222", fontWeight: "bold" }}>
          Fecha y Hora - Devolucion de Vehiculo
        </p>
        <DatePicker
          sx={{ width: "100%" }}
          disablePast
          minDate={dateinicio}
          maxDate={dayjs(dateinicio?.toDate()).add(30, "day")}
          value={datefin}
          onChange={(newValue) => setDateFin(newValue)}
        />

        <TimePicker
          ampm={false}
          minTime={inicioTime}
          maxTime={finTime}
          views={["hours", "minutes"]}
          format="HH:mm"
          sx={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default FechaReserva;

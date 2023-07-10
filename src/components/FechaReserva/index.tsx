import "./styles.css";
import dayjs from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

const FechaReserva: React.FC = () => {
  const [dateinicio, setDateInicio] = useState<string>("");
  const [datefin, setDateFin] = useState<string>("");
  const today = dayjs();
  const inicioTime = dayjs().set("hour", 7).startOf("hour");
  const finTime = dayjs().set("hour", 22).startOf("hour");

  const handleDateInicioChange = (newValue: Date | null) => {
    if (newValue) {
      const formattedDate = dayjs(newValue).format("YYYY/MM/DD");
      setDateInicio(formattedDate);
    } else {
      setDateInicio("");
    }
  };

  const handleDateFinChange = (newValue: Date | null) => {
    if (newValue) {
      const formattedDate = dayjs(newValue).format("YYYY/MM/DD");
      setDateFin(formattedDate);
    } else {
      setDateFin("");
    }
  };

  console.log(dateinicio);
  console.log(datefin);

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
          value={dateinicio ? dayjs(dateinicio).toDate() : null}
          onChange={handleDateInicioChange}
          defaultValue={today.toDate()}
          disablePast
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
          value={datefin ? dayjs(datefin).toDate() : null}
          onChange={handleDateFinChange}
          defaultValue={today.toDate()}
          disablePast
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

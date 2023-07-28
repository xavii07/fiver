import dayjs, { Dayjs } from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import "./styles.css";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface IFechaReservaProps {
  dateinicio: Dayjs | null;
  setDateInicio: (date: Dayjs | null) => void;
  datefin: Dayjs | null;
  setDateFin: (date: Dayjs | null) => void;
  timeinicio: Dayjs | null;
  setTimeinicio: (date: Dayjs | null) => void;
  timefin: Dayjs | null;
  setTimeFin: (date: Dayjs | null) => void;
}

const FechaReserva: React.FC<IFechaReservaProps> = ({
  dateinicio,
  setDateInicio,
  datefin,
  setDateFin,
  timeinicio,
  setTimeinicio,
  timefin,
  setTimeFin,
}) => {
  const finTime = dayjs().set("hour", 22).startOf("hour");
  const today = dayjs().startOf("day");

  const handleDateChange = (newValue: Dayjs | null) => {
    setDateInicio(newValue);
    if (newValue && newValue.isSame(today, "day")) {
      setTimeinicio(dayjs().startOf("hour"));
    } else {
      setTimeinicio(dayjs().set("hour", 7).startOf("hour"));
    }
  };

  return (
    <div className="contenedor">
      <div className="container_inicio">
        <p className="texto">Fecha y Hora - Retiro de Vehiculo</p>
        <DatePicker
          sx={{ width: "100%" }}
          value={dateinicio}
          disablePast
          onChange={handleDateChange}
        />
        <TimePicker
          value={timeinicio}
          disabled={!dateinicio}
          ampm={false}
          onChange={(newValue) => setTimeinicio(newValue)}
          minTime={dayjs().set("hour", 7).startOf("hour")}
          maxTime={finTime}
          disablePast={dateinicio?.isSame(today, "day")}
          views={["hours"]}
          format="HH:mm"
          sx={{ width: "100%" }}
        />
      </div>
      <div className="container_fin">
        <p className="texto">Fecha y Hora - Devolucion de Vehiculo</p>
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
          minTime={dayjs().set("hour", 7).startOf("hour")}
          onChange={(newValue) => setTimeFin(newValue)}
          value={timefin}
          disabled={!datefin}
          disablePast={datefin?.isSame(today, "day")}
          maxTime={finTime}
          views={["hours"]}
          format="HH:mm"
          sx={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default FechaReserva;

import {
  Slider,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { IMarca } from "../../interfaces/marca";
import { Dispatch, SetStateAction, useState } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

interface propsMarcasSelectFilter {
  marcas: IMarca[];
  setFilters: Dispatch<
    SetStateAction<{ marca: string; minPriceHour: number; minPriceDay: number }>
  >;
  maxPriceByHour: number;
  maxPriceByDay: number;
}

const Filters: React.FC<propsMarcasSelectFilter> = ({
  marcas,
  setFilters,
  maxPriceByHour,
  maxPriceByDay,
}) => {
  const [marca, setMarca] = useState("");
  const [minPriceHour, setMinPriceHour] = useState(0);
  const [minPriceDay, setMinPriceDay] = useState(0);
  const marksHour = [
    {
      value: 0,
      label: "($0)",
    },
    {
      value: maxPriceByHour,
      label: `($${maxPriceByHour})`,
    },
  ];

  const marksDay = [
    {
      value: 0,
      label: "($0)",
    },
    {
      value: maxPriceByDay,
      label: `($${maxPriceByDay})`,
    },
  ];

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setMarca(event.target.value as string);
    setFilters((prev) => ({ ...prev, marca: event.target.value as string }));
  };

  const handleChangeSliderHour = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setMinPriceHour(newValue as number);
    setFilters((prev) => ({ ...prev, minPriceHour: newValue as number }));
  };

  const handleChangeSliderDay = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setMinPriceDay(newValue as number);
    setFilters((prev) => ({ ...prev, minPriceDay: newValue as number }));
  };

  const handleClearFilters = () => {
    setMarca("");
    setMinPriceDay(0);
    setMinPriceHour(0);
    setFilters({ marca: "", minPriceDay: 0, minPriceHour: 0 });
  };

  return (
    <>
      <Box sx={{ width: 250 }}>
        <label style={{ fontSize: "0.8rem" }}>
          Precio por hora a partir de: ${minPriceHour}
        </label>
        <Slider
          getAriaValueText={valuetext}
          step={5}
          value={minPriceHour}
          max={maxPriceByHour}
          min={0}
          valueLabelDisplay="auto"
          marks={marksHour}
          onChange={handleChangeSliderHour}
        />
      </Box>
      <Box sx={{ width: 250 }}>
        <label style={{ fontSize: "0.8rem" }}>
          Precio por día a partir de: ${minPriceDay}
        </label>
        <Slider
          getAriaValueText={valuetext}
          step={5}
          value={minPriceDay}
          max={maxPriceByDay}
          min={0}
          valueLabelDisplay="auto"
          marks={marksDay}
          onChange={handleChangeSliderDay}
        />
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Marca</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={marca}
            label="Marca"
            onChange={handleChangeSelect}
          >
            <MenuItem value="" selected>
              Todas
            </MenuItem>
            {marcas.map((marca) => (
              <MenuItem key={marca.id} value={marca.nombre}>
                {marca.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Button variant="contained" onClick={handleClearFilters}>
          Borrar Filtros
        </Button>
      </Box>
    </>
  );
};

export default Filters;

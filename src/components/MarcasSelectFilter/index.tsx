import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IMarca } from "../../interfaces/marca";

interface propsMarcasSelectFilter {
  marcas: IMarca[];
}

const MarcasSelectFilter: React.FC<propsMarcasSelectFilter> = ({ marcas }) => {
  const [marca, setMarca] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMarca(event.target.value as string);
  };

  console.log(marca);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marca</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={marca}
          label="Marca"
          onChange={handleChange}
        >
          {marcas.map((marca) => (
            <MenuItem key={marca.id} value={marca.nombre}>
              {marca.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MarcasSelectFilter;

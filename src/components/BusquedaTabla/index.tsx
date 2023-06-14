/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input, TextField } from "@mui/material";
import Badge from "@mui/material/Badge";
import { FilledInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";

interface PropsBusquedaTabla {
  nombre: string;
  totalData: number;
  globalFilter: any;
  setGlobalFilter: any;
}

const BusquedaTabla: React.FC<PropsBusquedaTabla> = ({
  nombre,
  totalData,
  globalFilter,
  setGlobalFilter,
}) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#ba3131",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "100%",
      }}
    >
      <div style={{ display: "inline-flex", gap: "1", alignItems: "baseline" }}>
        <Badge badgeContent={totalData} color="primary">
          <p style={{ fontSize: "12px", color: "#777" }}>{nombre}</p>
        </Badge>
      </div>
      <div>
        <TextField
          variant="outlined"
          margin="none"
          size="small"
          type="search"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder={`🔍 Buscar...`}
        />
      </div>
    </div>
  );
};

export default BusquedaTabla;

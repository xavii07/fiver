/* eslint-disable @typescript-eslint/no-explicit-any */
import Badge from "@mui/material/Badge";
import { TextField } from "@mui/material";
import NoCrashIcon from "@mui/icons-material/NoCrash";

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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "100%",
      }}
    >
      <div style={{ display: "inline-flex", gap: 4, alignItems: "baseline" }}>
        <p style={{ fontSize: "12px", color: "#777" }}>{nombre}</p>
        <Badge
          badgeContent={totalData}
          color="success"
          sx={{ fontSize: "4rem", width: "2rem", height: "2rem" }}
        >
          <NoCrashIcon />
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

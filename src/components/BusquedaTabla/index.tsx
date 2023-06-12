import Badge from "@mui/material/Badge";

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
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div className="d-inline-flex gap-1 align-items-baseline">
        <p style={{ fontSize: "12px", color: "#777" }} className="m-0">
          {nombre}
        </p>
        <Badge
          style={{ backgroundColor: "#46a2fd" }}
          className="align-self-baseline  rounded-pill"
        >
          {totalData}
        </Badge>
      </div>
      <div>
        <input
          type="search"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder={`🔍 Buscar...`}
          className="form-control "
        />
      </div>
    </div>
  );
};

export default BusquedaTabla;

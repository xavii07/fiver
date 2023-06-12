import Pagination from "@mui/material/Pagination";

interface PropsPaginacion {
  pageIndex: number;
  pageSize: number;
  pageOptions: number[];
  gotoPage: any;
  previousPage: any;
  nextPage: any;
  canNextPage: boolean;
  canPreviousPage: boolean;
  setPageSize: any;
  pageCount: number;
}

const Paginacion: React.FC<PropsPaginacion> = ({
  pageIndex,
  pageSize,
  pageOptions,
  gotoPage,
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  setPageSize,
  pageCount,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        className="form-select mb-0"
        style={{ fontSize: "14px", width: "auto" }}
      >
        {[5, 10, 15].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Mostrar {pageSize}
          </option>
        ))}
      </select>
      <div className="d-flex gap-2 align-items-center">
        <span>
          Pagina{" "}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
        <Pagination count={pageCount} />
      </div>
    </div>
  );
};

export default Paginacion;

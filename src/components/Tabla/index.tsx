import { useTable, useGlobalFilter, usePagination } from "react-table";
import BusquedaTabla from "../BusquedaTabla";
import Paginacion from "../Paginacion";
import "./styles.css";
import { Table, TableContainer } from "@mui/material";

interface PropsTabla {
  columns: any;
  data: any;
  totalData: number;
  nombre: string;
}

const TablaComponent: React.FC<PropsTabla> = ({
  columns,
  data,
  totalData,
  nombre,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;

  if (totalData === 0)
    return (
      <p className="text-center fst-italic">
        No se encontro ningun medico registrado :(
      </p>
    );
  return (
    <>
      <div className="fondoMRegistrados"></div>
      <TableContainer className="containerMRegistrados">
        <BusquedaTabla
          nombre={nombre}
          totalData={totalData}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="fila">
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Paginacion
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          gotoPage={gotoPage}
          nextPage={nextPage}
          pageIndex={pageIndex}
          pageSize={pageSize}
          pageOptions={pageOptions}
          pageCount={pageCount}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      </TableContainer>
    </>
  );
};

export default TablaComponent;

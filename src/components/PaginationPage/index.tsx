import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface propsPagination {
  page: number;
  totalPages: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationPage: React.FC<propsPagination> = ({
  page,
  handleChangePage,
  totalPages,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
      />
    </Stack>
  );
};

export default PaginationPage;

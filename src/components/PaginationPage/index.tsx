import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationPage: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={5}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
      />
    </Stack>
  );
};

export default PaginationPage;

import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Progres Pendataan" subtitle="Sentra Ekonomi" />
      <Box height="75vh">
        <BarChart data={filteredData} isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;

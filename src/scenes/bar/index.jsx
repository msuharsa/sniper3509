import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChartCustom from "../../components/BarChartCustom";
import { tokens } from "../../theme";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const cardStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "12px",
    padding: "20px",
  };

  return (
    <Box m={{ xs: "10px", sm: "20px" }}>
      {/* Header */}
      <Header title="Progres Pendataan" subtitle="Sentra Ekonomi per Kabupaten/Kota" />

      {/* Chart Card */}
      <Box mt={2} sx={cardStyle}>
        <Typography variant="h5" fontWeight="600" mb="20px" color={colors.grey[100]}>
          Rekap Kabupaten/Kota
        </Typography>
        <Box height="560px">
          <BarChartCustom
            apiUrl="https://opensheet.vercel.app/1TWez2clXj6cu_qh_Alg-zQlnQSbjKnwYjNC_TlqOxww/Rekap_Kab"
            indexField="kodeKab"
            valueField="persenSentra"
            legendText="Kode Kab/Kota"
            highlightCode="3509"
            layout={"vertical"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bar;

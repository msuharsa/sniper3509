// src/scenes/line/index.jsx

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChartCustom from "../../components/BarChartCustom";

const LineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const cardStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "12px",
  };

  return (
    <Box
      gridColumn={{ xs: "span 12", sm: "span 6" }}
      gridRow="span 2"
      sx={{ ...cardStyle, p: 3 }}
    >
      <Typography variant="h5" fontWeight="600" mb="15px" color={colors.grey[100]}>
        📊 Rekap Kabupaten/Kota
      </Typography>
      <Box height="250px">
        <BarChartCustom
          apiUrl="https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKab"
          indexField="kodeKab"
          valueField="persenSentra"
          legendText="Kode Kab/Kota"
          highlightValue="3509"
        />
      </Box>

      <Typography variant="h5" fontWeight="600" mt="30px" mb="15px" color={colors.grey[100]}>
        📊 Rekap Kecamatan
      </Typography>
      <Box height="250px">
        <BarChartCustom
          apiUrl="https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKec"
          indexField="namaKecamatan"
          valueField="persenSentra"
          legendText="Kecamatan"
          highlightValue="Sumbersari"
        />
      </Box>
    </Box>
  );
};

export default LineChart;

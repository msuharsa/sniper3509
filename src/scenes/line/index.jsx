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
    padding: "20px",
  };

  // Komponen ChartCard reusable
  const ChartCard = ({
    title,
    apiUrl,
    indexField,
    valueField,
    legendText,
    highlightValue,
  }) => (
    <Box
      gridColumn={{ xs: "span 12", sm: "span 6" }}
      gridRow="span 2"
      sx={cardStyle}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        mb="20px"
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Box height="500px">
        <BarChartCustom
          apiUrl={apiUrl}
          indexField={indexField}
          valueField={valueField}
          legendText={legendText}
          highlightValue={highlightValue}
        />
      </Box>
    </Box>
  );

  return (
    <Box m={{ xs: "10px", sm: "20px" }}>
      {/* Grid 2 kolom di desktop, 1 kolom di mobile */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "repeat(12, 1fr)" }}
        gridAutoRows="minmax(300px, auto)"
        gap="20px"
      >
        {/* Grafik 1: Kabupaten/Kota */}
        <ChartCard
          title="Rekap Kabupaten/Kota"
          apiUrl="https://opensheet.vercel.app/1TWez2clXj6cu_qh_Alg-zQlnQSbjKnwYjNC_TlqOxww/Rekap_Kab"
          indexField="Kode Kab"
          valueField="PersenSentra"
          legendText="Kode Kab./Kota"
          highlightValue="3509"
        />

        {/* Grafik 2: Kecamatan */}
        <ChartCard
          title="Rekap Kecamatan"
          apiUrl="https://opensheet.vercel.app/1TWez2clXj6cu_qh_Alg-zQlnQSbjKnwYjNC_TlqOxww/Rekap_Kec"
          indexField="Kode Kec"
          valueField="PersenSentra"
          legendText="Kecamatan"
          highlightValue="Sumbersari"
        />
      </Box>
    </Box>
  );
};

export default LineChart;

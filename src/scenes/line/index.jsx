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
      <Box
        mt="25px"
        px="30px"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          mb="15px"
          color={colors.grey[100]}
        >
          {title}
        </Typography>
      </Box>
      <Box height="560px">
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
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "repeat(12, 1fr)" }}
        gridAutoRows="140px"
        gap="20px"
      >
        <ChartCard
          title="Rekap Kabupaten/Kota"
          apiUrl="https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKab"
          indexField="kodeKab"
          valueField="persenSentra"
          legendText="Kode Kab/Kota"
          highlightValue="3509"
        />

        <ChartCard
          title="Rekap Kecamatan"
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

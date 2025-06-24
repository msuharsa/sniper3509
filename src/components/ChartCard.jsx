// components/ChartCard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme"; // pastikan path sesuai
import BarChartCustom from "./BarChartCustom"; // atau sesuaikan path ke BarChartCustom

const cardStyle = {
  backgroundColor: "transparent",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #444", // opsional styling darkmode
};

const ChartCard = ({
  title,
  apiUrl,
  indexField,
  valueField,
  legendText,
  highlightValue,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
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
};

export default ChartCard;

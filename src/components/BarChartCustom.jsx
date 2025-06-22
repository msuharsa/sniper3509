// BarChartCustom.js
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import axios from "axios";

const BarChartCustom = ({
  apiUrl,
  indexField,
  valueField,
  legendText,
  highlightCode,
  isDashboard = false,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        const items = Object.values(res.data)[0];
        const cleaned = items
          .filter((d) => d[valueField] != null && d[indexField])
          .sort((a, b) => a[valueField] - b[valueField]);
        setChartData(cleaned);
      })
      .catch((err) => console.error("Gagal fetch data:", err));
  }, [apiUrl, indexField, valueField]);

  const barData = chartData.map((item) => {
    const name = item[indexField];
    const value = parseFloat(item[valueField]) || 0;
    const isHighlight = name.includes(highlightCode);

    return {
      indexName: name,
      value,
      color: isHighlight ? colors.orangeAccent[500] : colors.orangeAccent[700],
      isHighlight,
    };
  });

  const CustomLabelLayer = ({ bars }) =>
    bars.map((bar) => (
      <text
        key={bar.key}
        x={bar.x + bar.width + 5}
        y={bar.y + bar.height / 2}
        alignmentBaseline="middle"
        fill={bar.color}
        fontSize={11}
      >
        {bar.data.value.toFixed(2)}%
      </text>
    ));

  return (
    <ResponsiveBar
      layout="horizontal"
      data={barData}
      keys={["value"]}
      indexBy="indexName"
      margin={{ top: 50, right: 120, bottom: 60, left: 100 }}
      padding={0.3}
      colors={({ data }) => data.color}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisLeft={{
        legend: legendText,
        legendPosition: "middle",
        legendOffset: -50,
      }}
      axisBottom={null}
      enableLabel={false}
      enableGridX={false}
      enableGridY={false}
      layers={["grid", "axes", "bars", CustomLabelLayer]}
      theme={{
        axis: {
          ticks: { text: { fill: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
        },
        tooltip: {
          container: {
            background: colors.primary[500],
            color: "#ffffff",
          },
        },
      }}
    />
  );
};

export default BarChartCustom;

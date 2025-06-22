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
          .sort((a, b) => parseFloat(a[valueField]) - parseFloat(b[valueField]));
        setChartData(cleaned);
      })
      .catch((err) => console.error("Gagal fetch data:", err));
  }, [apiUrl, indexField, valueField]);

  const barData = chartData.map((item) => {
    const name = item[indexField];
    const value = parseFloat(item[valueField]) || 0;
    const isHighlight = highlightCode ? name.includes(highlightCode) : false;

    return {
      indexName: name,
      value,
      color: isHighlight ? colors.orangeAccent[300] : colors.orangeAccent[500],
      isHighlight,
    };
  });

  const CustomLabelLayer = ({ bars }) =>
    bars.map((bar) => (
      <text
        key={bar.key}
        x={bar.x + bar.width + 6}
        y={bar.y + bar.height / 2}
        alignmentBaseline="middle"
        fontSize={11}
        fill={bar.color}
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
      margin={{ top: 40, right: 120, bottom: 60, left: 100 }}
      padding={0.3}
      colors={({ data }) => data.color}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisLeft={{
        legend: legendText,
        legendPosition: "middle",
        legendOffset: -50,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisBottom={null}
      enableLabel={false}
      enableGridX={false}
      enableGridY={false}
      layers={["grid", "axes", "bars", CustomLabelLayer]}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
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

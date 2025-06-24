import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import axios from "axios";

const CustomLabelLayer = ({bars}) =>
    bars.map((bar) => {
      const label = `${bar.data.value.toFixed(2)}%`;
      return (
        <text
          key={bar.key}
          x={bar.x + bar.width + 5}
          y={bar.y + bar.height / 2}
          alignmentBaseline="middle"
          fill={bar.color}
          fontSize={11} // ✅ cocokkan dengan axis
        >
          {label}
        </text>
      );
    });

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
        console.log("RESPON API:", res.data);

        const items = Array.isArray(res.data) ? res.data : res.data.data || [];

        if (!Array.isArray(items)) {
            console.error("Data bukan array:", items);
            return;
        }

        const cleaned = items
            .filter((d) =>
            d[valueField] != null &&
            d[valueField] !== "" &&
            !isNaN(parseFloat(d[valueField])) &&
            d[indexField]
            )
            .sort((a, b) => parseFloat(a[valueField]) - parseFloat(b[valueField]));

        setChartData(cleaned);
        })
        .catch((err) => console.error("Gagal fetch data:", err));
    }, [apiUrl, indexField, valueField]
);

const barData = chartData.map((item) => {
    const name = item[indexField];
    const value = parseFloat(item[valueField]) || 0;
    const isHighlight = highlightCode ? name.includes(String(highlightCode)) : false;
    console.log("DEBUG", { name, highlightCode, isHighlight });

    return {
        indexName: name,
        value,
        color: isHighlight ? colors.orangeAccent[100] : colors.orangeAccent[400],
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
                fill={theme.palette.mode === "dark" ? colors.orangeAccent[400] : colors.orangeAccent[700]}
            >
                {bar.data.value.toFixed(2)}%
            </text>
        ));
    return (
        <ResponsiveBar
            layout={isDashboard ? "vertical" : "horizontal"}
            data={barData}
            keys={["value"]}
            indexBy="indexName"
            margin={{ 
                top: 0, 
                right: 30, 
                bottom: isDashboard ? 60 : 40, 
                left: isDashboard ? 40 : 60 
            }}
            padding={0.3}
            colors={({ data }) => data.color}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisLeft={
            isDashboard
                ? null
                : {
                    legend: legendText,
                    legendPosition: "middle",
                    legendOffset: -50,
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                }
            }
            axisBottom={
            isDashboard
                ? {
                    legend: legendText,
                    legendPosition: "middle",
                    legendOffset: 40,
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 90,
                }
                : null
            }
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

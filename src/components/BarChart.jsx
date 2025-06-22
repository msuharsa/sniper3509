import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import axios from "axios";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [statKab, setStatKab] = useState([]);
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

  useEffect(() => {
    axios
      .get("https://opensheet.vercel.app/1TWez2clXj6cu_qh_Alg-zQlnQSbjKnwYjNC_TlqOxww/Rekap_Kab")
      .then((res) => {
        const cleanedData = res.data
          .filter(item => item["PersenSentra"] != null && item["Kode Kab"])
          .sort((a, b) => a["PersenSentra"] - b["PersenSentra"]);
        setStatKab(cleanedData);
      })
      .catch((err) => console.error("Gagal mengambil data statbox:", err));
  }, []);


  const barData = statKab.map((item) => {
    const namaKab = item["Kode Kab"] || "UNKNOWN";
    const persen = parseFloat(item["PersenSentra"]) || 0;
    const isJember = namaKab.includes("3509");

    return {
      kab: namaKab,
      PersenSentra: persen,
      color: isJember ? colors.orangeAccent[500] : colors.orangeAccent[700],
      isJember: isJember,
    };
  });

  return (
    <ResponsiveBar
      layout={isDashboard ? "vertical" : "horizontal"}
      data={barData}
      keys={["PersenSentra"]}
      indexBy="kab"
      margin={{ top: 50, right: isDashboard ? 80 : 130, bottom: 80, left: 80 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ data }) => data.color}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisLeft={{
        legend: "Kode Kabupaten/Kota",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      axisBottom={null}
      enableLabel={false}
      enableGridX={false}
      enableGridY={false}
      layers={["grid", "axes", "bars", CustomLabelLayer]} // ✅ aktifkan label kustom
      animate={true}
      motionStiffness={90}
      motionDamping={15}
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
        legends: {
          text: {
            fill: colors.grey[100],
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

export default BarChart;

import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { useState, useEffect } from "react";
import axios from "axios";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [statKab, setStatKab] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKab")
      .then((res) => {
        const cleanedData = res.data.rekapKab
          .filter(item => item.persenSentra != null && item.kode)
          .sort((a, b) => a.persenSentra - b.persenSentra);
        setStatKab(cleanedData);
      })
      .catch((err) => console.error("Gagal mengambil data statbox:", err));
  }, []);


  const barData = statKab.map((item) => {
    const namaKab = item.kode || "UNKNOWN";
    const persen = parseFloat(item.persenSentra) || 0;
    const isJember = namaKab.includes("[3509]");

    return {
      kab: namaKab,
      PersenSentra: persen,
      color: isJember ? colors.orangeAccent[500] : colors.orangeAccent[700],
      isJember: isJember,
    };
  });

  return (
    <ResponsiveBar
      data={barData}
      keys={["PersenSentra"]}
      indexBy="kab"
      margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ data }) => data.color}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: isDashboard ? undefined : "kode",
        legendPosition: "middle",
        legendOffset: 60,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "PersenSentra",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      labelTextColor={(d) =>
        d.data.isJember ? "#fff" : "#000"
      }
      label={({ value, data }) => 
        data.isJember ? `${value.toFixed(1)}%` : `${value.toFixed(1)}%`
      }
      labelSkipHeight={12}
      labelSkipWidth={16}
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

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
          .filter(item => item.persenSentra != null && item["kabupaten/kota"])
          .sort((a, b) => a.persenSentra - b.persenSentra);
        setStatKab(cleanedData);
      })
      .catch((err) => console.error("Gagal mengambil data statbox:", err));
  }, []);


  const barData = statKab.map((item) => {
    const namaKab = item["kabupaten/kota"] || "UNKNOWN";
    const persen = parseFloat(item.persenSentra) || 0;
    const isJember = namaKab.includes("[3509] JEMBER");

    return {
      kab: namaKab,
      PersenSentra: persen,
      color: isJember ? "#facc15" : colors.greenAccent[600],
      isJember: isJember,
    };
  });

  return (
    <div style={{
      maxHeight: '600px',
      overflowY: 'auto',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
      <ResponsiveBar
        layout="horizontal" // ✅ buat horizontal
        data={barData}
        keys={["PersenSentra"]}
        indexBy="kab"
        margin={{ top: 50, right: 50, bottom: 60, left: 150 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={({ data }) => data.color}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Persentase Pendataan Sentra Ekonomi",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Kabupaten/Kota",
          legendPosition: "middle",
          legendOffset: -100,
        }}
        label={(d) => `${d.value.toFixed(1)}%`}
        labelTextColor={(d) => d.data.isJember ? "#000" : "#fff"}
        labelSkipWidth={12}
        labelSkipHeight={12}
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
    </div>
  );
};

export default BarChart;

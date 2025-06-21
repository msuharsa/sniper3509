// src/scenes/bar/index.jsx
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Header from "../../components/Header";          // ubah path relatif sesuai struktur folder
import BarChart from "../../components/BarChart";      // sesuaikan path agar tetap dalam src/

const Bar = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sheety.co/8841a2b55e10480aa7475b12fd451f5c/dataGerpas/rekapKab")
      .then((res) => {
        setFilteredData(res.data.rekapKab);  // ambil data JSON hasil fetch
      })
      .catch((err) => console.error("Gagal ambil data rekapKab:", err));
  }, []);

  return (
    <Box m="20px">
      <Header title="Progres Pendataan" subtitle="Sentra Ekonomi" />
      <Box height="75vh">
        <BarChart data={filteredData} isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

// Komponen item menu sidebar
const Item = ({ title, to, icon, selected, setSelected, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      icon={icon}
      onClick={() => {
        setSelected(title);
        setIsSidebarOpen(false); // Tutup sidebar di mobile
      }}
    >
      <Link to={to} style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      {/* Tombol menu hanya saat sidebar tertutup */}
      {!isSidebarOpen && (
        <IconButton
          onClick={() => setIsSidebarOpen(true)}
          sx={{
            position: "fixed",
            top: 10,
            left: 12,
            zIndex: 1200,
            color: colors.grey[100],
            backgroundColor: colors.orangeAccent[600],
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: colors.orangeAccent[500],
            },
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      )}

      {/* Sidebar */}
      <Box
        sx={{
          position: "fixed",
          top: "16px",
          left: "12px",
          height: "85vh",
          width: "clamp(200px, 80vw, 280px)",
          maxWidth: "100vw",
          overflowY: "hidden",
          zIndex: 1100,
          backgroundColor: colors.orangeAccent[600],
          transform: isSidebarOpen ? "translateX(0)" : "translateX(calc(-100% - 12px))",
          transition: "transform 0.3s ease-in-out",
          borderRadius: "16px",
          boxShadow: "4px 0 8px rgba(0,0,0,0.2)",
          "& .pro-sidebar-inner": {
            background: colors.orangeAccent[500],
            borderRight: "none !important",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#ffff00 !important",
          },
          "& .pro-menu-item.active": {
            color: "#eee600 !important",
          },
        }}
      >
        <ProSidebar>
          <Menu iconShape="square">
            {/* Header Sidebar */}
            <MenuItem
              onClick={() => setIsSidebarOpen(false)}
              icon={<MenuOutlinedIcon />}
              style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
            >
              <Typography variant="h3" color={colors.grey[100]}>
                SNIPER3509
              </Typography>
            </MenuItem>

            {/* Logo dan Deskripsi */}
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="SNIPER3509"
                  width="100px"
                  height="100px"
                  src="../../assets/Logo_Sniper1.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Strategi dan Mitigasi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Persiapan SE2026 Kabupaten Jember
                </Typography>
              </Box>
            </Box>

            {/* Menu Navigasi */}
            <Box>
              <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Progres Pendataan Pasar" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Progres Matchapro" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Database" to="/line" icon={<TableViewOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Peta Sarana Ekonomi" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Wilkerstat" icon={<ModeOfTravelIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
              <Item title="Tim dan Kontak" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />              <Item title="QnA" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} setIsSidebarOpen={setIsSidebarOpen} />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>

      {/* Overlay saat sidebar terbuka */}
      {isSidebarOpen && (
        <Box
          onClick={() => setIsSidebarOpen(false)}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        />
      )}
    </>
  );
};

export default Sidebar;

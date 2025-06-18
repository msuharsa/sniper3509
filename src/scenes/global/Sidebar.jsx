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
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
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
            top: 14,
            left: 13,
            zIndex: 1200,
            color: colors.grey[100],
            backgroundColor: colors.blueAccent[600],
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            "&:hover": {
              backgroundColor: colors.primary[500],
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
<<<<<<< HEAD
          left: "12px",
          height: "80vh",
          width: "clamp(200px, 80vw, 280px)", // Lebar responsif
          maxWidth: "100vw", // Tidak melebihi layar
          overflowY: "hidden", // auto --> Aktifkan scroll vertikal kalau konten banyak, hidden --> nonaktifkan
          zIndex: 1100,
          backgroundColor: colors.primary[400],
          transform: isSidebarOpen ? "translateX(0)" : "translateX(calc(-100% - 12px))",
          transition: "transform 0.3s ease-in-out",
          borderTopLeftRadius: "16px",
          borderTopRightRadiuss: "16px",
          orderBottomLeftRadius: "16px",
=======
          left: "16px",
          height: "95vh",
          width: "clamp(200px, 80vw, 280px)", // Lebar responsif
          maxWidth: "100vw", // Tidak melebihi layar
          overflowY: "auto", // Aktifkan scroll vertikal kalau konten banyak
          zIndex: 1100,
          backgroundColor: colors.primary[400],
          transform: isSidebarOpen ? "translateX(0)" : "translateX(calc(-100% - 16px))",
          transition: "transform 0.3s ease-in-out",
          borderTopRightRadius: "16px",
>>>>>>> 5c5fb2e729eac12c69ce3ec0de254e7162692ad6
          borderBottomRightRadius: "16px",
          boxShadow: "4px 0 8px rgba(0,0,0,0.2)",
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
            borderRight: "none !important",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem
              onClick={() => setIsSidebarOpen(false)}
              icon={<MenuOutlinedIcon />}
              style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
            >
              <Typography variant="h3" color={colors.grey[100]}>
                SNIPER3509
              </Typography>
            </MenuItem>

            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="SNIPER3509"
                  width="100px"
                  height="100px"
                  src={`../../assets/Logo_Sniper.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
<<<<<<< HEAD
                  variant="h5"
=======
                  variant="h4"
>>>>>>> 5c5fb2e729eac12c69ce3ec0de254e7162692ad6
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
<<<<<<< HEAD
                  Strategi dan Mitigasi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Persiapan SE2026 Kabupaten Jember
=======
                  BPS Kabupaten Jember
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Dashboard Persiapan SE2026
>>>>>>> 5c5fb2e729eac12c69ce3ec0de254e7162692ad6
                </Typography>
              </Box>
            </Box>

            <Box>
              <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
<<<<<<< HEAD
              <Item title="Progres Pendataan Pasar" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Progres Matchapro" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Database" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Peta Sarana Ekonomi" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Tim dan Kontak" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="QnA" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
=======
              <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
              
{/*              <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
      */}
              <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Geography" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
>>>>>>> 5c5fb2e729eac12c69ce3ec0de254e7162692ad6
            </Box>
          </Menu>
        </ProSidebar>
      </Box>

      {/* Overlay */}
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

import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
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
          width: isCollapsed ? "64px" : "220px",
          maxWidth: "100vw",
          height: "95vh",
          width: "220px",
          overflowY: "hidden",
          zIndex: 1100,
          backgroundColor: colors.primary[400],
          transform: isSidebarOpen ? "translateX(0)" : "translateX(calc(-100% - 16px))",
          transition: "transform 0.3s ease-in-out",
          borderTopRightRadius: "16px",
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
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  BPS Kabupaten Jember
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Dashboard Persiapan SE2026
                </Typography>
              </Box>
            </Box>

            <Box>
              <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Geography" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
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

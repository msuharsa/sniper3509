import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Topbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
      {/* Kiri: Tombol Menu + Search */}
      <Box display="flex" alignItems="center" gap={1} flex={1}>
        {/* Tombol Menu hanya tampil di mobile */}
        {isMobile && (
          <IconButton onClick={() => setIsSidebarOpen(prev => !prev)}>
            <MenuOutlinedIcon />
          </IconButton>
        )}

        {/* Search Bar */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          flex={1}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Kanan: Icon Menu */}
      <Box display="flex" gap={1}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

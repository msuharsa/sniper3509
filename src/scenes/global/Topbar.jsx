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
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
//      position="sticky"
      top={0}
      zIndex={1200}
      bgcolor={colors.primary[400]}
      height="60px"
    >
      {/* Kiri: Tombol Menu (mobile) + Search */}
      <Box display="flex" alignItems="center" gap={1} flex={1}>
        <Box
          display="flex"
          alignItems="center"
          backgroundColor={colors.primary[500]}
          borderRadius="12px"
          overflow="hidden"
          flex={1}
          ml={6}
        >
          <InputBase
            sx={{
              ml: 2,
              flex: 1,
              color: colors.grey[100],
            }}
            placeholder="Search"
          />
          <IconButton
            type="button"
            sx={{
              p: 1.2,
              borderRadius: 0,
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Kanan: Icon Action */}
      <Box display="flex" gap={1} ml={2}>
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

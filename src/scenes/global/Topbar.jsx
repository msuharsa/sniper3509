import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
 
  const placeholderColor =
    theme.palette.mode === "dark" ? colors.grey[300] : colors.grey[700];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      top={0}
      zIndex={1200}
      bgcolor="transparent"
      height="60px"
      sx={{
        backdropFilter: "blur(6px)", // efek glass
      }}
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
              "&::placeholder": {
                color: placeholderColor,
                opacity: 1,
              },
            }}
            placeholder="Search"
          />
          <IconButton
            type="button"
            sx={{
              p: 1.2,
              borderRadius: 0,
              backgroundColor: colors.orangeAccent[600],
              color: colors.grey[100],
              "&:hover": {
                backgroundColor: colors.orangeAccent[500],
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
      </Box>
    </Box>
  );
};

export default Topbar;

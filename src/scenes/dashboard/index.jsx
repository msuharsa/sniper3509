import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StoreIcon from "@mui/icons-material/Store";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "12px",
  };

  return (
    <Box m={{ xs: "10px", sm: "20px" }}>
      {/* ===== Background Oranye Gelap Sepertiga Layar dengan Lengkung ===== */}
      <Box
        sx={{
          height: "33vh",
          width: "100%",
          backgroundColor: colors.orangeAccent[700],
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* ===== Konten Dashboard ===== */}
      <Box position="relative" zIndex={1}>
        {/* HEADER */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap="10px"
        >
          <Header title="Dashboard" subtitle="Persiapan Pendataan SE2026" />
          <Button
            sx={{
              backgroundColor: colors.orangeAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              borderRadius: "12px",
              mb: 2,
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: 1 }} />
            Unduh Data
          </Button>
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "repeat(12, 1fr)" }}
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          {["Pasar", "Pertokoan", "Mall", "Update Profilling"].map((label, i) => (
            <Box
              key={i}
              gridColumn={{ xs: "span 12", sm: "span 3" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={cardStyle}
            >
              <StatBox
                title={["12,361", "431,225", "32,441", "1,325,134"][i]}
                subtitle={label}
                progress={["0.75", "0.50", "0.30", "0.80"][i]}
                increase={["+14%", "+21%", "+5%", "+43%"][i]}
                icon={
                  [<StoreIcon />, <StorefrontIcon />, <LocalGroceryStoreIcon />, <TaskAltIcon />][i]
                }
              />
            </Box>
          ))}

          {/* ROW 2 - Line Chart */}
          <Box
            gridColumn={{ xs: "span 12", sm: "span 8" }}
            gridRow="span 2"
            sx={cardStyle}
          >
            <Box
              mt="25px"
              px="30px"
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Box>
                <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                  Progres Pendataan Menurut Kabupaten/Kota
                </Typography>
                <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                  $59,342.32
                </Typography>
              </Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: 26, color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
            <Box height="250px" mt="-20px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 2 - Transactions */}
          <Box
            gridColumn={{ xs: "span 12", sm: "span 4" }}
            gridRow="span 2"
            sx={{ ...cardStyle, overflow: "auto" }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" p="15px">
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Progres Pendataan Menurut Kecamatan
              </Typography>
            </Box>
          </Box>

          {/* ROW 3 - Campaign */}
          <Box
            gridColumn={{ xs: "span 12", sm: "span 4" }}
            gridRow="span 2"
            p="30px"
            sx={cardStyle}
          >
            <Typography variant="h5" fontWeight="600">
              Rata-rata Muatan per Sentra Ekonomi
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size={isMobile ? 100 : 125} />
              <Typography variant="h5" color={colors.greenAccent[500]} mt="15px">
                $48,352 revenue generated
              </Typography>
              <Typography textAlign="center">
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>

          {/* ROW 3 - Sales Quantity */}
          <Box
            gridColumn={{ xs: "span 12", sm: "span 4" }}
            gridRow="span 2"
            p="30px"
            sx={cardStyle}
          >
            <Typography variant="h5" fontWeight="600" mb="15px">
              Progres Update Profilling Menurut Kecamatan
            </Typography>
            <Box height="250px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 3 - Geography Chart */}
          <Box
            gridColumn={{ xs: "span 12", sm: "span 4" }}
            gridRow="span 2"
            p="30px"
            sx={cardStyle}
          >
            <Typography variant="h5" fontWeight="600" mb="15px">
              Peta Sebaran Unit Usaha
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display="flex">
          {/* Sidebar Floating */}
          <Box
            position="fixed"
            top={0}
            left={isSidebarOpen || isDesktop ? 0 : "-260px"}
            height="100vh"
            width="260px"
            zIndex={1300}
            sx={{
              transition: "left 0.3s ease-in-out",
              backgroundColor: theme.palette.background.default,
              boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
            }}
          >
            <Sidebar isSidebar={true} />
          </Box>

          {/* Main Content */}
          <Box
            flexGrow={1}
            ml={isDesktop ? "260px" : 0}
            width="100%"
          >
            {/* ✅ Prop ini harus sesuai dengan Topbar.jsx */}
            <Topbar setIsSidebarOpen={setIsSidebarOpen} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

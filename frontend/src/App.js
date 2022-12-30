import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Students from "./scenes/students";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Chat from "./scenes/chat";
import Status from "./scenes/status";
import Bar from "./scenes/bar";
import Profile from "./scenes/profile";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import SignInOut from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/app/dashboard" element={<Dashboard />} />
              <Route path="/app/students" element={<Students />} />
              <Route path="/app/calendar" element={<Calendar />} />
              <Route path="/app/faq" element={<FAQ />} />
              <Route path="/app/bar" element={<Bar />} />
              <Route path="/app/pie" element={<Pie />} />
              <Route path="/app/line" element={<Line />} />
              <Route path="/app/status" element={<Status />} />
              <Route path="/app/chat" element={<Chat />} />
              <Route path="/app/profile" element={<Profile />} />
              <Route path="/app/login" element={<SignInOut />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

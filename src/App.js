import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
//import RandomNazev1 from "./scenes/randomnazev1";
//import RandomNazev2 from "./scenes/randomnazev2";
//import Bar from "./scenes/bar";
//import Profile from "./scenes/profile";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              {/*<Route path="/randomnazev1" element={<RandomNazev1 />} />*/}
              {/*<Route path="/randomnazev2" element={<RandomNazev2 />} />*/}
              {/*<Route path="/profile" element={<Profile />} />*/}
              {/*<Route path="/bar" element={<Bar />} />*/}
              {/*<Route path="/pie" element={<Pie />} />*/}
              {/*<Route path="/line" element={<Line />} />*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

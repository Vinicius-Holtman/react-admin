import { ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Topbar } from "./scenes/global/Topbar";
import { Sidebar } from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes/Dashboard";
import { Team } from "./scenes/Team";
import { Contacts } from "./scenes/Contacts/Index";
import { Invoices } from "./scenes/Invoices";
import { Form } from "./scenes/Form";
import { Calendar } from "./scenes/Calendar";
import { FAQ } from "./scenes/FAQ";
import { Bar } from "./scenes/Bar";
import { Pie } from "./scenes/Pie";
import { Line } from "./scenes/Line";
import { Geography } from "./scenes/Geography";
// import { Team } from "./scenes/team";
// import { Invoices } from "./scenes/invoices";
// import { Contacts } from "./scenes/contects";
// import { Bar } from "./scenes/bar";
// import { Form } from "./scenes/form";
// import { Line } from "./scenes/line";
// import { Pie } from "./scenes/pie";
// import { FAQ } from "./scenes/faq";
// import { Geography } from "./scenes/geography";
// import { Calendar } from "./scenes/calendar";

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={ <Dashboard /> }  />
              <Route path="/team" element={ <Team /> }  />
              <Route path="/invoices" element={ <Invoices /> }  />
              <Route path="/contacts" element={ <Contacts /> }  />
              <Route path="/form" element={ <Form /> }  />
              <Route path="/calendar" element={ <Calendar /> }  />
              <Route path="/faq" element={ <FAQ /> }  />
              <Route path="/bar" element={ <Bar /> }  />
              <Route path="/pie" element={ <Pie /> }  />
              <Route path="/line" element={ <Line /> }  />
              <Route path="/geography" element={ <Geography /> }  />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

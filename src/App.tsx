import { ColorModeContext, useMode } from "./config/theme";
import TopBar from './scenes/global/Topbar'

import { ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

function App(){
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <TopBar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;

